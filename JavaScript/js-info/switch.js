/*// When to Use Each:
Use if-else when you have multiple conditions,
   complex logical expressions, or 
   need more flexibility in the conditions.
 
// Use switch when you have a single expression 
  with multiple possible values to check, 
  and you want a cleaner and more concise syntax.*/

//switch-syntax
// switch (expression) {
//     case value1:
//       // code to be executed if expression matches value1
//       break;
//     case value2:
//       // code to be executed if expression matches value2
//       break;
//     // more cases...
//     default:
//       // code to be executed if none of the cases match
//   }
let day = "Monday";
day='sunday';
switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Tuesday":
        console.log("It's a regular day that is Tuesday");
        break;
    case "Wednesday":
        console.log("It's a regular day that is Wednesday");
        break;
    case "Thursday":
        console.log("It's a regular day that is Thursday");
        break;
    case "Friday":
        console.log("It's almost the weekend");
        break;
    default:
        console.log("It's a weekend");
}