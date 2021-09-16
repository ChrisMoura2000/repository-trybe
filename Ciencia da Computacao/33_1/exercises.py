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


# Ex3


def bigest_name(list_name):
    result = ""
    for name in list_name:
        if result < name:
            result = name

    return result
