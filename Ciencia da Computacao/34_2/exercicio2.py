from statistics import median, mean, mode


class Estatistica:
    def media(self, lista_medias):
        print(mean(lista_medias))

    def mediana(self, lista_mediana):
        print(median(lista_mediana))

    def moda(self, lista_moda):
        print(mode(lista_moda))


estatistica = Estatistica()
estatistica.media([5, 5, 5])
estatistica.mediana([10, 15, 5])
estatistica.moda([1, 2, 1, 5, 7, 4, 9, 8, 5, 6, 3])
