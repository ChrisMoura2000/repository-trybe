let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
  for (let j = 0; j < index; j += 1){
    if (numbers[index] < numbers[j]){
      let positon = numbers[index];

      numbers[index] = numbers[j];
      numbers[j] = positon;
    }
  }
}
for (let cont = 0; cont < numbers.length; cont += 1){
  console.log(numbers[cont])
}
