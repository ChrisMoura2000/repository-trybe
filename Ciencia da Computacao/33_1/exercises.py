import math

# Ex1


def bigest(a, b):
    if a > b:
        return a
    else:
        return b


# Ex2


def average(list):
    sum = 0

    for num in list:
        sum += num

    return sum / len(list)


# Ex3


def print_square(square):
    if square < 1:
        return "Não foi possivel fazer o quadrado"
    else:
        for index in range(square):
            print(square * "*")


# Ex4


def bigest_name(list_name):
    result = ""
    for name in list_name:
        if result < name:
            result = name

    return result


# Ex5


# 1 Litro cobre 3 metros quadrados
# 1 Lata de tinta tem 18 litros e custa R$ 80,00
# Quantas latas eu preciso comprar e quanto vai custar


def calc_ink(space):
    paint_cans = math.ceil((space / 3) / 18)
    if paint_cans < 1:
        paint_cans = 1
    price = paint_cans * 80.00
    result = (paint_cans, price)
    return result
