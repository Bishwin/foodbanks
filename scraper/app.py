import requests, json, pprint, re
from bs4 import BeautifulSoup

def get_all_foodbanks():
    url='https://www.trusselltrust.org/get-help/find-a-foodbank/foodbank-search/?foodbank_s=all&callback=json'

    headers = {
        'User-Agent': 'My User Agent 1.0',
    }
    res = requests.get(url, headers=headers)
    data = res.text[5:-2]#remove jquery nonsense from response to allow json parsing
    return json.loads(data)

def get_websites_from_foodbanks(foodbanks):
    targets_ = []
    for foodbank in foodbanks:
        info = foodbank.get('foodbank_information')
        print(info)
        website = info.get('website')
        name = info.get('name')
        
        donation_url = append_donate_path(website)
       
        targets_.append({
            'name': name,
            'website': website,
            'url': donation_url
        })
    return targets_

def append_donate_path(website):
    if not website:
        return ''
    url_suffix = 'give-help/donate-food/'
    if website[-1] == '/':
        f_url = f'{website}{url_suffix}'
    else:
        f_url = f'{website}/{url_suffix}'    
    return f_url
    

def generate_donation_url(websites_to_scrape):
    targets = []
    url_suffix = 'give-help/donate-food/'
    for website in websites_to_scrape:
        if website[-1] == '/':
            f_url = f'{website}{url_suffix}'
        else:
            f_url = f'{website}/{url_suffix}'
        targets.append(f_url)
    return targets


def main():
    foodbanks = get_all_foodbanks()

    headers = {
        'User-Agent': 'My User Agent 1.0',
    }

    websites_to_scrape = get_websites_from_foodbanks(foodbanks)

    scraped_foodbanks = []
    for target in websites_to_scrape:
        try:
            res = requests.get(target['url'], headers=headers)
            foodbank_html_page = res.text
            results = scrape(foodbank_html_page, target)
            scraped_foodbanks.append(results)
        except Exception as e:
            with open('scraped_log.txt', 'a+') as f:
                f.write(f'target: {target}, error: {e}\n')
            print(f'error with target: {target}')

    pprint.pprint(scraped_foodbanks)

#now to write to json
    with open('../content/scraped_foodbanks.json', 'w') as f:
        f.write(json.dumps(scraped_foodbanks))


def scrape(html_str, url):  
    soup = BeautifulSoup(html_str, 'html.parser')
    
    results = { 'name': url['name'], 'url': url['url'], 'wanted': [], 'unwanted': [] }

    wanted = []
    unwanted = []
    nodes_to_scrape = []
    if not soup.aside:
        return results

    for child in soup.aside.children:
        if child.name == 'div':
            if 'page-section--sidebar__block-with-shopping-list' in child.attrs.get('class'):
                nodes_to_scrape.append(child)
    list_type = ''
    for node in nodes_to_scrape:
        for n in node.children:
            if n.name == 'h3':
                if 'Urgently' in n.text:
                    list_type = 'wanted'
                elif 'plenty' in n.text:
                    list_type = 'unwanted'
            if n.name == 'ul':
                for li_ in n.children:
                    if li_.name and li_.string:
                        r = results.get(list_type, [])
                        r.append(li_.string)
    return results


if __name__ == '__main__':
    main()

