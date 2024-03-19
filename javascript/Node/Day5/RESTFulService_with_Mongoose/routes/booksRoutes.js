let express = require('express');
let router = express.Router();

const booksCtrl = require('../controllers/books-controller');

router.get('/', booksCtrl.getBooks);
router.get('/:isbn', booksCtrl.getBook);
router.post('/', booksCtrl.postBook);
router.put('/:isbn', booksCtrl.updateBook);
router.delete('/:isbn', booksCtrl.deleteBook);

module.exports = router;
