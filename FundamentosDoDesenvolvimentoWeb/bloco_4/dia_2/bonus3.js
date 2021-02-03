let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for(let cont = 1; cont < numbers.length; cont += 1){
    let multi = numbers[cont] * numbers[cont - 1];
    newArray.push(multi);
    if (numbers[cont + 1] === undefined){
        multi = numbers[cont] * 2;
        newArray.push(multi)
    }
  
}

console.log(newArray);

//Deu super certo mas o ultimo valor ta errado!
//Agora sim deu certo de verdade kkkkkkk!