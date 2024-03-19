let callMe = () =>{
    console.log('immutable!');
    var a = {name:'Abhijeet',things:[11,22,33]};
    var b = Object.assign({},a,{name:'Ashish'});// returns a brand new object
    console.log(a);
    console.log(b);
    b.things = a.things.concat(44,55);// returns a brand new object
    console.log(a.things);
    console.log(b.things);
    b.things = a.things.filter(v => v!==22);
    console.log(a.things);
    console.log(b.things);
    // Currying Function
    // Currying is the technique of evaluating function with multiple
    // arguments to sequence of functions with single argument.
    function add(x,y){
        return x+y;
    }
    console.log('Addition is ',add(4,5));
    function sum(x){
        return function(y){
            return x+y;
        }
    }
    console.log('Addition is ',sum(4)(5));
    // function greeting(message, name){
    //     return message+' '+name;
    // }
    // console.log(greeting('Good Morning','Sachin'));
    // console.log(greeting('Good Morning','Rahul'));
    // console.log(greeting('Good Morning','Sourav'));
    function greeting(message){
        return function(name){
            return message+' '+name;
        }
    }
    const mGreet = greeting('Good Morning');
    console.log(mGreet('Sachin'));
    console.log(mGreet('Rahul'));
    console.log(mGreet('Sourav'));
    const aGreet = greeting('Good Afternoon');
    console.log(aGreet('Sachin'));
    console.log(aGreet('Rahul'));
    console.log(aGreet('Sourav'));
}
export default callMe;