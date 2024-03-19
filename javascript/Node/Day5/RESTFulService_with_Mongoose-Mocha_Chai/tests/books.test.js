let Book = require('../models/book');

// Require dev dependencies

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);


    describe("/GET books",()=>{
        it('it should GET all the books',(done)=>{
            chai.request(server)
            .get('/books')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            })
        })
    })

    


    describe("/POST book",()=>{
        it('It should POST a valid book',(done)=>{
            let book ={
                "name":"The God Father",
                "author":"Mario Puzo",
                "isbn": "isbn456",
                "pages":434
            }

            describe('Books',()=>{
                beforeEach((done) =>{
                    Book.deleteOne({},(err)=>{
                        done();
                    });
                });
            chai.request(server)
            .post('/books')
            .send(book)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Successfully added the book ');
                res.body.book.should.have.property('name');
                res.body.book.should.have.property('author');
                res.body.book.should.have.property('isbn');
                res.body.book.should.have.property('pages');
                done();
            })
        })
    })
})

