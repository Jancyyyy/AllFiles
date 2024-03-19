/*//Constructor, operator "new"
When a function is executed with new, it does the following steps:
A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.
*/
function User(name){
    this.name=name;
    this.isAdmin=false;
}
let user=new User('jancy');
console.log(user.name)
console.log(user.isAdmin)
//the main purpose of constructors – to implement reusable object creation code.
