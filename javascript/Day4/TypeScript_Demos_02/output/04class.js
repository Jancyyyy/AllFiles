"use strict";
var BankAccount = (function () {
    function BankAccount(_accNumber, _accName) {
        this._accNumber = _accNumber;
        this._accName = _accName;
    }
    ;
    Object.defineProperty(BankAccount.prototype, "BankName", {
        get: function () {
            return BankAccount._bankName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount, "BankName", {
        set: function (value) {
            BankAccount._bankName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "AccountHolderName", {
        get: function () {
            return this._accName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "AccountNumber", {
        get: function () {
            return this._accNumber;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
BankAccount.BankName = 'HDFC';
var a1 = new BankAccount(23456, 'Sachin');
console.log("\nBank Name : ".concat(a1.BankName, " "));
console.log("Account Number : ".concat(a1.AccountNumber, " "));
console.log("Account Holder Name: ".concat(a1.AccountHolderName));
var a2 = new BankAccount(54456, 'Rahul');
console.log("\nBank Name : ".concat(a2.BankName, " "));
console.log("Account Number : ".concat(a2.AccountNumber, " "));
console.log("Account Holder Name: ".concat(a2.AccountHolderName));
