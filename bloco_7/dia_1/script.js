
let  testingScope = (escopo) => { 
    if (escopo) { 
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}
//  testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let compareNumbers = (a, b) => a - b;

oddsAndEvens.sort(compareNumbers);

//  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

let fatorial = (num) => {
  if(num === 0){
    return '1'
  }
  let resp = num;
  while(num > 2){
    //resp *= --num
    resp = resp * (num-1)
  }
  return resp 
}

//  console.log(fatorial(4));
 
let fatorial = (num) => {
  if (num >= 2){ 
   return num * fatorial(num - 1)
  } 
  return num
}

//  console.log(fatorial(4));


//  let fatorial = num => num * (num >= 2 ? fatorial(num - 1) : num)
//  console.log(fatorial(4))

let longestWord = (phrase) =>  {
  let compareNumbers = (a, b) => a.length - b.length;
  let arrayPhrase = phrase.split(' ');
  let ordenado = arrayPhrase.sort(compareNumbers);
  return ordenado[arrayPhrase.length - 1]
}
//  console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))