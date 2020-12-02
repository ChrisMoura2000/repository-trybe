let numbers = [2, 3, 2, 5, 8, 2, 3,];

function moda(num) {
    let start = 0;
    let repete = 0;
    let valorDoIndex = 0;
    for (let index = 0; index < num.length; index += 1){
        start = repete;
        repete = 0
       for (let j = 1; j < num.length; j += 1){
           if (num[index] === num[j]){
               repete += 1
           }
       }
       if(repete > start){
           valorDoIndex = num[index]
       }   
    }
    return valorDoIndex
}

console.log(moda(numbers))


//Deu certo