let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = 0;
let numPar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 > 0){
        numImpar += 1;
    }else{
        numPar += 1;
    }
}

console.log(`Existe ${numImpar} números impares e ${numPar} números pares.`)