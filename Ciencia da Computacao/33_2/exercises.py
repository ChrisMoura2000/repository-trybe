import json
from random import choice, sample

# Exercicio 1


def ex1():
    name = input("Digite seu nome:")

    for index in range(len(name)):
        print(name[:-index])


# Exercicio 2


def ex2(animals=["sapato", "carro", "sol", "estrela"]):
    word_selected = choice(animals)
    scrambled_word = "".join(sample(word_selected, len(word_selected)))
    print(scrambled_word)
    user_response = input("Qual é a palavra acima?\n")
    while user_response != word_selected:
        print("Não foi dessa vez mas não desista continue tentando.\n")
        user_response = input(f"Qual é essa > {scrambled_word} < ? \n")
    print("Muito bem você é uma pessoa muito inteligente!!!")


# Exercicio 3


def ex3():
    file = open("./animals.txt", mode="r")
    animals = file.read().split()
    ex2(animals)
    file.close()

    # word_selected = choice(animals)
    # scrambled_word = "".join(sample(word_selected, len(word_selected)))
    # print(scrambled_word)
    # user_response = input("Qual é a palavra acima?\n")
    # while user_response != word_selected:
    #     print("Não foi dessa vez mas não desista continue tentando.\n")
    #     user_response = input(f"Qual é essa > {scrambled_word} < ? \n")
    # print("Muito bem você é uma pessoa muito inteligente!!!")


# Exercicio 4


def ex4():
    with open("books.json") as books_file:
        books_list = json.load(books_file)
        all_categories = {}
        for book in books_list:
            for categorie in book["categories"]:
                if categorie not in all_categories:
                    all_categories[categorie] = 1
                else:
                    all_categories[categorie] += 1
        print(all_categories)
