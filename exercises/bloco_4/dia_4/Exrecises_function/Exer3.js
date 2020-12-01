let array = [2, 4, 6, 7, 10, 0, -3];

function checkIndexBigger(vetor){
    let maiorValor = 0;
    let menorValor = 0;
    for (let j in vetor){
        if (menorValor > vetor[j]){
            menorValor = vetor[j]
        }
    }

  return vetor.indexOf(menorValor)
}

console.log(checkIndexBigger(array));

//Deu certo