class MyClass{
    constructor(){
        console.log("initiate");
    }
    sayHello(){
        console.log("Hello");
    }
    add(arg1,arg2){
        var result;
        result=arg1+arg2;
        return result;
    }
    callAnotherFn(arg1,arg2){
        this.sayHello();
        var result=this.add(arg1,arg2);
        return result;
     }
     testPromise(){
        return new Promise(function(reslove,reject){
            setTimeout(()=>reslove(1),3000);
        }).then(function(result){
            return result * 2;
        });
     }
    callTheCallback(callback){
        callback()
    }
}
module.exports=MyClass;