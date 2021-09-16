// Execicio 4.1------------------------------------------------
const fs = require('fs');

function readAllDoc(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) return reject(err);
            const arrayStrings = JSON.parse(data).map((element) => `${element.id} - ${element.name}`)
            resolve(arrayStrings)
        })
        // fs.readFile(file, (err, data) => {
        //     if(err) return reject(err)
        //     const result = JSON.parse(data)
        //     const result = data
        //     resolve(data)
        // })
    })
}
readAllDoc('./Dia_26_2/teste.txt')
  .then(response => console.log(response))
  .catch(error => console.log(error))


// Exercicio 4.2 ------------------------------------------------

function lookForID(id) {
    return new Promise((resolve, reject) => {
        fs.readFile('./simpsons.json', (err, data) => {
            if (err) return reject(err);
            const newData = JSON.parse(data)
            const result = newData.filter((e)=> e.id === id);
            if(result.length === 0) return reject("Error: ID não encontrado.")
            resolve(result)
        })
    })
}
// lookForID('7')
//  .then(response => console.log(response[0].name))
//  .catch(error => console.log(error))