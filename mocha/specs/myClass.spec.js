var MyClass=require("../src/myClass.js");
var sinon=require("sinon");
var myObj=new MyClass();
var chai=require("chai");
var expect=chai.expect;
describe.skip("Test suit", function(){
    it("Test the add method", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })
    it("spy the add method", function(){
        //syntax for spy:-var spy=sinon.spy()
        var spy=sinon.spy(myObj,"add");
        var arg1=10;
        arg2=20;
        myObj.callAnotherFn(arg1,arg2);
        //sinon.assert.calledTwice(spy);// this is for only calledonce
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(10,20)).to.be.true;
    })
    it("spy the callback method",function(){
        var callback=sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    });
    it("mock the sayHello method", function(){
        var mock=sinon.mock(myObj);
        var expectation=mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("Hello World");
        myObj.callAnotherFn(10,20);
        mock.verify();
    })
    describe.skip("Test suit for stub", function(){
        it("Stub the add method", function(){
            var stub=sinon.stub(myObj,"add");
            stub
            .withArgs(10,20)
            .onFirstCall()
            .returns(100)
            .onSecondCall()
            .returns(200);
            expect(myObj.callAnotherFn(10,20)).to.be.equal(1000);
            expect(myObj.callAnotherFn(10,20)).to.be.equal(2000);
        });
    });
});
// sinon lib create spies for diff methods 