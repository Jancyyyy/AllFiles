let employees = [
    /*{ id: 1, name: 'Devanand' },
    { id: 2, name: 'Avinash' },
    { id: 3, name: 'Nakul' },
    { id: 4, name: 'Sneha' },
    { id: 5, name: 'Nikita' }*/
    {id:1,name:'A better india',isbn:'1574',author:'Naryana',pages:'130'},
    {id:2,name:'A passage to india',isbn:'1234',author:'foster',pages:'120'},
    {id:3,name:'Death of a city',isbn:'4321',author:'amrita',pages:'100'},
    {id:4,name:'a suitable boy',isbn:'1345',author:'vikram',pages:'130'},
    {id:5,name:'Oliver twist',isbn:'3456',author:'charles Darwin',pages:'120'}
];

exports.getAllEmployees = function(){
    return employees;
}

exports.getEmployee = function(id){
    return employees.find(e => book.id === Number(id));
}
exports.getEmployee = function(name){
    return employees.find(e => book.name === String(name));
}
exports.getEmployee = function(isbn){
        return employees.find(e => book.isbn === String(isbn));
    }
exports.getEmployee = function(author){
        return employees.find(e => book.author === String(author));}
exports.getEmployee = function(pages){
        return employees.find(e => book.pages === Number(pages));}

exports.insertEmployee = function(employee){
    employees = [...employees, {...employee}];
    return true;
}

exports.deleteEmployee = function(id){
    employees = [...employees.filter(e =>book.id !== parseInt(id))];
    return true;
}

exports.updateEmployee = function (employee) {
    var itemIndex = employees.findIndex(e => book.id === parseInt(book.id));
    var itemIndex = employees.findIndex(e => book.name === String(book.name));
    var itemIndex = employees.findIndex(e => book.isbn === String(book.isbn));
    var itemIndex = employees.findIndex(e => book.author === String(book.author));
    var itemIndex = employees.findIndex(e => book.pages === parseInt(book.pages));
    var tempEmployees = [...employees];
    tempEmployees.splice(itemIndex, 1, { ...employee });
    employees = [...tempEmployees];
    return true;
}