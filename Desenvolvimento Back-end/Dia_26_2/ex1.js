function sumAndMult(a, b, c) {
    return new Promise((resolve, reject)=>{
        if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number") return reject("Erro: Favor informar apenas números!")
        
        const result = ((a + b) / c);

        if (result < 50) return reject(`Erro: Valor muito baixo ->${result}<-`);

        return resolve(`Resultado: ${result}.`)
    })
}

// sumAndMult(100, 100, 100)
//   .then( resp => console.log(resp))
//   .catch( err => console.error(err));

module.exports = sumAndMult;
