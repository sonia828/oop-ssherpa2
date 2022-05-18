const assert=require('assert')
const chai=require('chai')
const {Rectangle,Height,Volume} =require('../rectangle')
const expect=chai.expect
const assertEq=assert.deepStrictEqual

describe('Rectangle',function(){
    describe('#Length',function(){
        it('Length in Meters.',function(){
            const length=5;
            const breadth=6;
            const R1=new Rectangle(length, breadth);
            assertEq(length,R1.length);
        })
    })
    describe('#Breadth',function(){
        it('Breadth in Meters.',function(){
            const length=5;
            const breadth=6;
            const R1=new Rectangle(length, breadth);
            assertEq(breadth,R1.breadth);
        })
    })
});

describe('Rectangle',function(){
    describe('#Height',function(){
        it('Height in Meters.',function(){
            const height=5;
            const H1=new Height(height);
            assertEq(height,H1.height);
        })
    })
});
describe('Rectangle',function(){
    describe('#Volume',function(){
        it('Volume in Cubic Meter.',function(){
            const height=5;
            const volume=150;
            const V1=new Volume(height,volume);
            assertEq(volume,V1.volume);
        })
    })
});