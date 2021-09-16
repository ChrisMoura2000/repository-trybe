const readLine = require('readline-sync');

function calcIMC() {
    const weight = readLine.questionFloat('Digite qual o seu peso: ')
    const height = readLine.questionFloat('Digite qual a sua altura: ')
    
    const result = weight / (height * height)
    
    if(result < 18.5) {
        return "Abaixo do peso (magreza)"
    };

    if(result >= 18.5 && result <= 24.9){
        return "Peso normal"
    };

    if(result >= 25 && result <= 29.9){
        return "Acima do peso (sobrepeso)"
    };

    if(result >= 30 && result <= 34.9){
        return "Obesidade grau I"
    };

    if(result >= 35 && result <= 39.9){
        return "Obesidade grau II"
    };

    if(result >= 40 ) {
        return "Obesidade graus III e IV"
    };

}


module.exports = calcIMC;
