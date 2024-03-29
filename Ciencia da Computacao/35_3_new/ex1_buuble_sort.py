from cronometro import Cronometro

animals = ["zebra", "macaco", "elefante", "arara", "javali"]


def bubble_sort(array):
    has_swapped = True

    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for i in range(len(array) - num_of_iterations - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                has_swapped = True

        num_of_iterations += 1

    return array


with Cronometro("bubble_sort"):
    bubble_sort(animals)
