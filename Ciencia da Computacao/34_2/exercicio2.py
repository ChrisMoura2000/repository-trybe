from statistics import median, mean, mode


class Estatistica:
    def __init__(self, lista):
        self.lista = lista

    def media(self):
        print(mean(self.lista))

    def mediana(self):
        print(median(self.lista))

    def moda(self):
        print(mode(self.lista_moda))


estatistica = Estatistica([1, 2, 1, 5, 7, 4, 9, 8, 5, 6, 3])
estatistica.moda()
