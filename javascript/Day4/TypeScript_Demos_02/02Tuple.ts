// TypeGuard Array

var dataArr1:(number|string)[];

dataArr1 = [1,'Abhijeet'];
dataArr1 = ['Abhijeet',1];
dataArr1 = ['Abhijeet','Gole'];
dataArr1 = [1,2,3,4,5,6];
dataArr1 = [1,'Abhijeet',234,'Pune'];


// Tuple - Stores a fixed collection of values of same or varied types,
// maintaining the sequence.

// Tuple is a typed array with a pre-defined length and types for each index.
// Tuples are greate because they allow each element in the array to be a known type of value.

let dataRow:[number,string];
dataRow = [100,'default'];
//dataRow = ['default',100];
//dataRow = [10,20];

let user:[number,string,boolean,number,string];
user = [1,'Sachin',true,200,'Mumbai'];