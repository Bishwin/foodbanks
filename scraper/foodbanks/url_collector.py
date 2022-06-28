from dataclasses import dataclass
import requests, json


@dataclass
class FoodbankInformation():
    pass



def get_all_foodbanks():
    url='https://www.trusselltrust.org/get-help/find-a-foodbank/foodbank-search/?foodbank_s=all&callback=json'

    headers = {
        'User-Agent': 'My User Agent 1.0',
    }
    res = requests.get(url, headers=headers)
    data = res.text[5:-2] #remove jquery nonsense from response to allow json parsing
    return json.loads(data)



if __name__ == '__main__':
    data = get_all_foodbanks()
    with open('./cachedfoodbanks.json', 'w') as f:
        f.write(json.dumps(data))