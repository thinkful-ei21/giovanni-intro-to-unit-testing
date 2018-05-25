'use strict';

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function(){

  it('should raise error if input is not an integer', function(){

    const nonNumbers = ['1','one',NaN,undefined,null, Infinity];
    nonNumbers.forEach(function(item){
      expect(function(item){
          
        fizzBuzzer(item)}).to.throw(Error);
    });
  });

  it('should return fizzbuzz when divisible by 15', function(){

    const result = fizzBuzzer(15);
    expect(result).to.equal('fizz-buzz');   
  });

  it('should return fizz when divisible by 3', function(){

    const result = fizzBuzzer(3);
    expect(result).to.equal('fizz');   
  });

  it('should return buzz when divisible by 5', function(){

    const result = fizzBuzzer(5);
    expect(result).to.equal('buzz');    
  });

})