import requests


def ex1():
    URL = "https://httpbin.org/encoding/utf8"
    response = requests.get(URL)
    print(response)


ex1()
