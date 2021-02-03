// const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}

// implemente seus testes aqui
let a=2;
let b=3
describe('Testes da função sum()', () => {
  test('Verifica se esta executando a soma dos parametros.', () => {
    expect(sum(a, b)).toBe(a+b)
  });
  
  test('verifica se 4 + 5 retorna 9.', () => {
    expect(sum(4, 5)).toBe(9)
  });
  
  test('Verifica se quando os parametros são 0 o retorno é 0.', () => {
    expect(sum(0, 0)).toBe(0)
  });
  
  test('A função sum deve lançar um erro quando algum paramtro é diferente de number.', () => {
    expect(() => {sum(4, '5')}).toThrow(/parameters must be numbers/)
  });

})