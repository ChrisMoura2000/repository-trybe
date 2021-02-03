const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

let expected = sum(5, 5)
assert.strictEqual(expected, 10, 'A função deve retornar 10');
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(sum(4, '5'), 'parameters must be numbers')
