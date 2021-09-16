const readLine = require('readline-sync');

function adivinhacao() {
    const inputNum = readLine.questionInt('Teste a sorte: ');
    const randomNumber = Math.round(Math.random()*10);
    
    console.log(`Expected: ${randomNumber}`);
    console.log(`Received: ${inputNum}`);

    if(randomNumber === inputNum) {
        return 'Uau, que habilidade, você acertou :)'
    }

    if(randomNumber !== inputNum) {
        return 'Não foi dessa vez, mas não desista :('
    }
};

console.log(adivinhacao());