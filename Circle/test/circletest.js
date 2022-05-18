const assert=require('assert')
const chai=require('chai')
const {Circle} =require('../circle')
const expect=chai.expect
const assertEq=assert.deepStrictEqual

describe('Circle',function(){
    describe('#Radius',function(){
        it('Radius in Meters.',function(){
            const radius=5;
            const area=78.5;
            const c1=new Circle(radius, area);
            assertEq(radius,c1.radius);
        })
    })
    describe('#Area',function(){
        it('Area in Meter Square.',function(){
            const radius=5;
            const area=78.5;
            const c1=new Circle(radius, area);
            assertEq(area,c1.Area());
        })
    })
})