import requests, json, pprint


def get_all_foodbanks():
    url='https://www.trusselltrust.org/get-help/find-a-foodbank/foodbank-search/?foodbank_s=all&callback=json'

    headers = {
        'User-Agent': 'My User Agent 1.0',
    }
    res = requests.get(url, headers=headers)
    data = res.text[5:-2]#remove jquery nonsense from response to allow json parsing
    return json.loads(data)

def get_websites_from_foodbanks(foodbanks):
    websites_to_scrape = []
    for foodbank in foodbanks:
        info = foodbank.get('foodbank_information')
        if info.get('website'):
            websites_to_scrape.append(info.get('website'))
    return websites_to_scrape

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
    targets = generate_donation_url(websites_to_scrape)

    html_str = ''
    for target in targets[:1]:
        res = requests.get(target, headers=headers)
        html_str = res.text
        results = scrape(html_str)
        results['url'] = target
        results['name'] = ''
        pprint.pprint(results)



def scrape(html_str):
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(html_str, 'html.parser')

    wanted = []
    unwanted = []
    nodes_to_scrape = []
    for child in soup.aside.children:
        if child.name == 'div':
            if 'page-section--sidebar__block-with-shopping-list' in child.attrs.get('class'):
                nodes_to_scrape.append(child)

    results = { 'wanted': [], 'unwanted': [] }
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

