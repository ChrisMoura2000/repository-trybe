let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaiorPalavra(array){
    let maiorPalavra = '';
    for (let index = 0; index < array.length; index += 1){
        for (let j = 1; j < array.length; j += 1)
        if (array[index].length > array[j].length){
                maiorPalavra = array[index]
            }
    }
    return maiorPalavra
}

console.log(retornaMaiorPalavra(nomes))

//Deu certo