const sumAndMult = require('./ex1');

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);


// sumAndMult(a, b, c)
//   .then( resp => console.log(resp))
//   .catch( err => console.error(err));


/*--- EXERCICIO 3 ---*/ 

async function callOtherFunc(num1, num2, num3) {
  try {
    const response = await sumAndMult(num1, num2, num3)
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

callOtherFunc(a, b, c);
