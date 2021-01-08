function soma(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplica(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function positivoOuNegativo(x) {
    if (x > 0){
        return 'Positivo';
    } else if (x < 0) {
        return 'Negativo';
    }else{
        return 'Zero'
    }

}

function verificaPar(a, b, c){
    if (a%2 > 0 || b%2 > 0 || c%2 > 0){
        return 'True - pelo menos um número é impar.'
    }else{
        return 'False - nenhum número é impar.'
    }
}

function testeTriangulo(a, b, c){
    let res = (a + b + c);

    if(res == 180){
        return 'True'
    }else{
        return 'False'
    }
}


function xadrez(name){
    switch (name.toLowerCase()) {
        case 'peão':
            return 'Peão anda apenas para frente come na diagonal.'
            break;
        case 'cavalo':
            return 'Cavalo só anda em formato da letra L.'
            break;
        case 'bispo':
            return 'Bispo só anda na diagonal.'
            break;
        case 'torre':
            return 'Torre anda quantas casas quiser apenas pra frente pra traz pra esquerda e pra direita.'
            break;
        case 'dama':
            return 'Dama anda quantas casa quiser e em qualquer direção.'
            break;
        case 'rei':
            return 'Rei anda em qualquer direção mas apenas uma casa.'
            breack
        default:
            return 'Nome da peça não reconhecido'
    }
}

function converteNota(notaPorcent){
    if (notaPorcent < 0 || notaPorcent > 100) {
        return 'Nota invalida.'
    }else if (notaPorcent >= 90 ){
        return 'A'
    }else if (notaPorcent >= 80 ){
        return 'B'
    }else if (notaPorcent >= 70 ){
        return 'C'
    }else if (notaPorcent >= 60 ){
        return 'D'
    }else if (notaPorcent >= 50 ){
        return 'E'
    }else if (notaPorcent < 50){
        return 'F'
    } 
}

