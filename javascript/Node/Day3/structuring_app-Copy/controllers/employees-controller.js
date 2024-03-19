const da = require('../data-access');

exports.index = (req,res)=>{
    res.render("employees/index", {pageTitle:'Books View',empList:da.getAllEmployees()});
}

exports.create_get = (req,res) =>{
    res.render("employees/create", {pageTitle:'Book Create View',});
}

exports.create_post = (req,res) =>{
    console.log("Body: ", req.body);
    var { id, name,isbn,author,pages } = req.body;// Destructuring
    var employee = { id: parseInt(bookid), name: bookname, isbn: bookisbn, author: bookauthor, pages: parseInt(bookpages)};

    if (da.insertEmployee(employee)) {
        res.redirect('/employees');
    } else {
        res.render("employees/create", { pageTitle: "Book Create View"});
    }
}

exports.details = (req,res)=>{
    let id = req.query.id || req.params.bookid;
    res.render("employees/details", {pageTitle:'Book Details View',employee:da.getEmployee(id),employee:da.getEmployee(name),employee:da.getEmployee(isbn),employee:da.getEmployee(author),employee:da.getEmployee(pages)});
}

exports.delete_get = (req,res)=>{
    let id = req.query.id || req.params.bookid;
    res.render("employees/delete",{pageTitle:'Book Delete View',employee:da.getEmployee(id),employee:da.getEmployee(name),employee:da.getEmployee(isbn),employee:da.getEmployee(author),employee:da.getEmployee(pages)});
}
exports.delete_post = (req,res)=>{
    let id = req.query.id || req.params.bookid;
    if(da.deleteEmployee(id)){
        res.redirect('/employees');
    }
    else{
        res.render("employees/delete",{pageTitle:'Book Delete View',employee:da.getEmployee(id),employee:da.getEmployee(name),employee:da.getEmployee(isbn),employee:da.getEmployee(author),employee:da.getEmployee(pages)});
    }
}

exports.edit_get = (req, res) => {
    var id = req.query.id || req.params.bookid;
    res.render("employees/edit", { pageTitle: "Book Edit View", employee: da.getEmployee(id),employee:da.getEmployee(name),employee:da.getEmployee(isbn),employee:da.getEmployee(author),employee:da.getEmployee(pages)});
}
exports.edit_post = (req, res) => {
    console.log("Body: ", req.body);
    var { bookid, bookname, bookisbn, bookauthor, bookpages } = req.body;// Destructuring
    var employee = { id: parseInt(bookid), name: bookname ,isbn: bookisbn, author:bookauthor, pages:parseInt(bookpages)};

    if (da.updateEmployee(employee)) {
        res.redirect('/employees');
    } else {
        res.render("employees/edit", { pageTitle: "Book Edit View", employee });
    }
}