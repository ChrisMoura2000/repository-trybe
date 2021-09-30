class Tv:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False
        print(f"A TV é de {self.__tamanho} polegadas")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
        if self.__ligada:
            print("Televisão ligada")
        else:
            print("Televisão desligada")

    def aumentar_volume(self):
        if self.__volume <= 99 and self.__ligada:
            self.__volume += 1
            print(f"Volume {self.__volume}")
        else:
            print("Não é possível aumentar volume com a TV desligada")

    def diminuir_volume(self):
        if self.__volume > 0 and self.__ligada:
            self.__volume -= 1
            print(f"Volume {self.__volume}")
        else:
            print("Não é possível diminuir volume com a TV desligada")

    def mudar_canal(self, novo_canal):
        if not self.__ligada:
            print("Não é possível mudar o canal com a TV desligada")
            return
        if novo_canal > 0 and novo_canal <= 99:
            self.__canal = novo_canal
            print(f"Novo canal {self.__canal}")
        else:
            print("Canal inválido")


televisão = Tv(32)
televisão.ligar_desligar()
televisão.diminuir_volume()
televisão.aumentar_volume()
televisão.mudar_canal(10)
print()
televisão.ligar_desligar()
televisão.diminuir_volume()
televisão.aumentar_volume()
televisão.mudar_canal(10)
