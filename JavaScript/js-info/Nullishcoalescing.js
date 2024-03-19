/*|| returns the first truthy value.
?? returns the first defined value.
*/
//nullish Coalescing is '??'
let user;
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)
let user1="john";
console.log(user1 ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
//Comparison with ||
let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";
// shows the first truthy value:
console.log(firstName1 || lastName1 || nickName1 || "Anonymous"); 
let firstName2 = "jancy";
let lastName2 = null;
let nickName2 = "Supercoder";

// shows the first truthy value:
console.log(firstName2 || lastName2 || nickName2 || "Anonymous"); // Supercoder
