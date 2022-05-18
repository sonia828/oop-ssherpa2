const assert=require('assert')
const chai=require('chai')
const { Medium, Big, Small } =require('../sizeMaker')
const { Dog , Cat, Fish } =require('../animalMaker')
const expect=chai.expect
const assertEq=assert.deepStrictEqual

describe('Animal', function() {
  describe('#constructor()', function() {
    it('build dog -> goto size function -> return dog size ', function(){
	    let sizeBig = new Big();
        let expect = "Big Dog";
		let dog = new Dog(sizeBig)
	    let result = dog.getString();
	    assertEq(expect,result);
    });
    it('build cat -> goto size function -> return cat size ', function(){
	    let sizeMedium = new Medium();
        let expect = "Medium Cat";
		let cat = new Cat(sizeMedium)
	    let result = cat.getString();
	    assertEq(expect,result);
    });
    it('build 3 fish -> goto size function -> return each fish size ', function(){
	    let sizeBig = new Big();
	    let sizeMedium = new Medium();
	    let sizeSmall = new Small();

		let fish = new Fish(sizeBig)
		let fish1 = new Fish(sizeMedium)
		let fish2 = new Fish(sizeSmall)

        let expect = "Big Fish";
        let expect1 = "Medium Fish";
        let expect2 = "Small Fish";

	    let result = fish.getString();
	    let result1 = fish1.getString();
	    let result2 = fish2.getString();
        
	    assertEq(expect,result);
	    assertEq(expect1,result1);
	    assertEq(expect2,result2);
    });
  });
});