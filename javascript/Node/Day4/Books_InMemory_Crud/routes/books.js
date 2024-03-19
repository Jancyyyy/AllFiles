var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books-controller');

/* GET users listing. */
router.get('/', booksCtrl.index);
router.get('/create', booksCtrl.create_get);
router.post('/create', booksCtrl.create_post);
router.get('/details/:bisbn', booksCtrl.details);
router.get('/delete/:bisbn', booksCtrl.delete_get);
router.post('/delete/:bisbn', booksCtrl.delete_post);
router.get("/edit/:bisbn", booksCtrl.edit_get);
router.post("/edit/:book", booksCtrl.edit_post);

module.exports = router;
