/*1
12
123
1234
12345

let rows=5;
let pattern="";
//managing the rows
for(let i=1;i<=rows;i++){
    //inner loop-generating the nums in each row
    for(let num=1;num<=i;num++){
        pattern=pattern+num;
    }
    pattern=pattern+'\n';
}
console.log(pattern);
//----------------------------------------------------

1
22
333
4444
55555
let rows=5;
let pattern="";
for(let i=1;i<=rows;i++){        
    for(let num=1;num<=i;num++){
        pattern=pattern+i;//1
    }
    pattern=pattern+"\n";
}
console.log(pattern);

//------------------------------------------------------
12345
1234
123
12
1

let rows=5;
let pattern="";
for(i=0;i<=rows;i++){
    for(j=1;j<=(rows-i);j++){
        pattern=pattern+j;
    }
    pattern=pattern+"\n";
}
console.log(pattern);

*/