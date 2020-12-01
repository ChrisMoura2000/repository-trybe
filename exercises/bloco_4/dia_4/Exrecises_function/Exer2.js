let array = [2, 3, 6, 7, 10, 1];

function checkIndexBigger(vetor){
    let maiorValor = 0;
    for (let i in vetor){
        if(maiorValor < vetor[i]){
            maiorValor = vetor[i];
        }
    }
    return vetor.indexOf(maiorValor)
}

console.log(checkIndexBigger(array));

//Deu certo