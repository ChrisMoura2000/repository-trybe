function verifyNum(num) {
    if(typeof(number) !== 'number') throw new Error('Erro: Informe apenas números')

    if(num > 0) return 'positivo'  // if(num > 0) return 'neutro'
    if(num < 0) return 'negativo'  // if(num < 0) return 'positivo'
    if(num === 0) return 'neutro'  // if(num === 0) return 'negativo'
    
}

console.log(verifyNum("cinco"));

module.exports = {
    verifyNum
}
