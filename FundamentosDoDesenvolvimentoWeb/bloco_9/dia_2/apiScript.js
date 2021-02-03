const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const jokeConteiner = document.querySelector('#jokeContainer');
        jokeConteiner.innerText = data.joke;
    });
};

window.onload = () => fetchJoke();

  // exercicio 2
  // Primeiramente, instancie uma Promise (instancie === criar)
  // criar um array com 10 números -- OK
  // esses números devem aleatórios de 1 a 50 -- OK
  // Devem ser elevados ao quadrado -- OK
  // Somar todoas os elementos do array 
  // Se for menor que 8000 a promise deve ser resolvida 
  // se não deve ser rejeitada

const exercise2 = () => {
  return new Promise((resolve, reject) => {
    let ramdowArray = [];
    let sum = 0
    for (let index = 0; index <= 10; index += 1){
      ramdowArray.push(Math.round(Math.random() * 50))
      ramdowArray[index] = ramdowArray[index] * ramdowArray[index]
      sum = sum + ramdowArray[index]
    }
    console.log(sum)
    sum < 8000 ? resolve(sum) : reject(sum)
  })
}

exercise2()
  .then((num) => {
    let divisiblesNumbers = [2, 3, 5, 10];
    let resp = []
    divisiblesNumbers.forEach((value) => {
      resp.push(Math.round(num/value))
    })
    console.log(resp)
  })
  //.catch((num) => console.log(`Rejeitado = ${num}`))