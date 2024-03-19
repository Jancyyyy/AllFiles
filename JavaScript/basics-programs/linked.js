// class linkedlist{
//     constructor(){
//         this.head=null;
//     }
//     append(value){
//         const newNode={
//             value:value,
//             next:null
//         }
//         if(this.head==null){
//             this.head=newNode;
//             return;
//         }
//         let current=this.head;
//         while(current.next!==null){
//             current=current.next;
//         }
//         current.next=newNode;
//     };
// }

// printList(){
//     let list=[];
//     let current=this.head,
//     while(current!==null){
//         list.push(current.value);
//         current=current.next;
//     }
// }
search(value){
    let current=this.head;
    let index=0;
    while(current!==null){
        if(current.value===value){
            return index++;
        }
        current=current.next;
        index++;
    }
    return -1;
}
const mylinkedlist=new linkedlist();
mylinkedlist.append(10);
mylinkedlist.append(20);
mylinkedlist.append(30);
// console.log(mylinkedlist);
// mylinkedlist.append(10);
// mylinkedlist.append(20);
// mylinkedlist.append(30);
// mylinkedlist.append(40);
// mylinkedlist.append(50);
// mylinkedlist.append(60);
mylinkedlist.printList();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://javascript.info/script-async-defer
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
// https://www.c-sharpcorner.com/article/linkedlist-implementation-in-javascript/
// https://www.scaler.com/topics/pattern-in-javascript/
// https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3
// https://www.youtube.com/watch?v=78Homn79Qsk&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX
