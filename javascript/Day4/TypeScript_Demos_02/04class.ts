// class Employee{
//     private _name:string;

//     // constructor(){
//     //     this._name = 'NA';
//     // }

//     // constructor(nm:string){
//     //     this._name = nm;
//     // }

//     constructor(nm='NA'){
//         this._name = nm;
//     }

//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// e1.setName('Abhijeet');
// console.log(e1.getName());

// // ------------------------------------------------

// class Employee{
//     private _name:string;
//     private _age?:number|undefined;

//     constructor(nm='NA'){
//         this._name = nm;
//     }

//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }
//     getAge(){
//         return this._age?.toFixed();
//     }
//      setAge(value:number|undefined){
//          this._age = value;
//      }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setName('Abhijeet');
// e1.setAge(40);
// console.log(e1.getName());
// console.log(e1.getAge());


// // ------------------------------------------------

// class Employee{
//     private _name:string;
//     private _age?:number|undefined;

//     constructor(nm='NA'){
//         this._name = nm;
//     }

//     // Accessor properties - setter and getter
//     get Name():string{
//         return this._name;
//     }
//     set Name(value:string){
//         this._name = value;
//     }
//     get Age(){
//         return this._age;
//     }
//     set Age(value:number|undefined){
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = 'Abhijeet';
// e1.Age =40;
// console.log(e1.Name);
// console.log(e1.Age);


// // ---------------------------- Parameter Properties / Parameter Members

// class Employee{
    
//     // // Declared private data members and then in the ctor you are initializing them
//     // private _name:string;
//     // private _age:number;

//     // constructor(nm='NA',age=10){
//     //     this._name = nm;
//     //     this._age = age;
//     // }

//     // OR

//     // Declared parameter members like below   
//     constructor(private _name='NA',private _age=0){}

//     // Accessor properties - setter and getter
//     get Name():string{
//         return this._name;
//     }
//     set Name(value:string){
//         this._name = value;
//     }
//     get Age(){
//         return this._age;
//     }
//     set Age(value:number){
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = 'Abhijeet';
// e1.Age =40;
// console.log(e1.Name);
// console.log(e1.Age);

// // -------------- BankAccount
//  class BankAccount{
//     constructor(private _accName:string, private _bankName:string){};

//     get BankName(){
//         return this._bankName;
//     }
//     set BankName(value:string){
//         this._bankName = value;
//     }

//     get AccountHolderName():string{
//         return this._accName;
//     }
//  }

// let a1 = new BankAccount('Sachin','ICICI');
// console.log(`\nBank Name : ${a1.BankName} `);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// let a2 = new BankAccount('Rahul','ICICI');
// console.log(`\nBank Name : ${a2.BankName} `);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);


// // ---------------- Person Class

// class Person{
//     // class variable - static variable
//     private static _population:number = 0;

//     constructor(){
//         Person._population++;
//     }
//     static get Population(){
//         return Person._population;
//     }
//     static set Population(value:number){
//         Person._population = value;
//     }
// }

// let p1 = new Person();
// let p2 = new Person();
// console.log(Person.Population);
// let p3 = new Person();
// console.log(Person.Population);


// // -------------- BankAccount - static
// class BankAccount{
//     private static _bankName:string;

//     constructor(private _accName:string){};

//     // getter is not static
//     get BankName(){
//         return BankAccount._bankName;
//     }
//     // setter static
//     static set BankName(value:string){
//         BankAccount._bankName = value;
//     }

//     get AccountHolderName():string{
//         return this._accName;
//     }
//  }

// BankAccount.BankName = 'HDFC';

// let a1 = new BankAccount('Sachin');
// console.log(`\nBank Name : ${a1.BankName} `);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// let a2 = new BankAccount('Rahul');
// console.log(`\nBank Name : ${a2.BankName} `);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);


// -------------- BankAccount - static - readonly

class BankAccount{

    private static _bankName:string;    
    constructor(private readonly _accNumber:number, private _accName:string){};

    // getter is not static
    get BankName(){
        return BankAccount._bankName;
    }
    // setter static
    static set BankName(value:string){
        BankAccount._bankName = value;
    }

    get AccountHolderName():string{
        return this._accName;
    }
    get AccountNumber():number{
        return this._accNumber;
    }
 }

BankAccount.BankName = 'HDFC';

let a1 = new BankAccount(23456,'Sachin');
console.log(`\nBank Name : ${a1.BankName} `);
console.log(`Account Number : ${a1.AccountNumber} `);
console.log(`Account Holder Name: ${a1.AccountHolderName}`);

let a2 = new BankAccount(54456,'Rahul');
console.log(`\nBank Name : ${a2.BankName} `);
console.log(`Account Number : ${a2.AccountNumber} `);
console.log(`Account Holder Name: ${a2.AccountHolderName}`);