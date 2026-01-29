const { expect } = require('chai');
const calc = require('../app/calculator');

describe("Calculator Test Suite", () => {

    // ADD
    it("add(5, 2) expected result 7 PASS", () => {
      expect(calc.add(5, 2)).to.equal(7);
    });
  
    it("add(5,2) expected result 8 FAIL", () => {
      expect(calc.add(5, 2)).to.equal(8);
    });
  
    // SUB
    it("sub(5, 2) expected result 3 PASS", () => {
      expect(calc.sub(5, 2)).to.equal(3);
    });
  
    it("sub(5,2) expected result 5 FAIL", () => {
      expect(calc.sub(5, 2)).to.equal(5);
    });
  
    // MUL
    it("mul(5, 2) expected result 10 PASS", () => {
      expect(calc.mul(5, 2)).to.equal(10);
    });
  
    it("mul(5,2) expected result 12 FAIL", () => {
      expect(calc.mul(5, 2)).to.equal(12);
    });
  
    // DIV
    it("div(10, 2) expected result 5 PASS", () => {
      expect(calc.div(10, 2)).to.equal(5);
    });
  
    it("div(10,2) expected result 2 FAIL", () => {
      expect(calc.div(10, 2)).to.equal(2);
    });
  
  });