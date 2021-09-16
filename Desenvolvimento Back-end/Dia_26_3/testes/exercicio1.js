const { verifyNum } = require('../verifyFunc');
const { expect } = require('chai');

describe("Verifica se o número é;", () => {

    it("Positivo", ()=>{
        const result = verifyNum(5);
        expect(result).equals('positivo');
    });

    it("Negativo", ()=>{
        const result = verifyNum(-5);
        expect(result).equals('negativo');
    });

    it("Neutro", ()=>{
        const result = verifyNum(0);
        expect(result).equals('neutro');
    });
});
