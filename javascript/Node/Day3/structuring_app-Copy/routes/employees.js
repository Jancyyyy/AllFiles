var express = require('express');
var router = express.Router();

const empCtrl = require('../controllers/employees-controller');

/* GET users listing. */
router.get('/', empCtrl.index);
router.get('/create', empCtrl.create_get);
router.post('/create', empCtrl.create_post);
router.get('/details/:bookid', empCtrl.details);
router.get('/delete/:bookid', empCtrl.delete_get);
router.post('/delete/:bookid', empCtrl.delete_post);
router.get("/edit/:bookid", empCtrl.edit_get);
router.post("/edit/:bookid", empCtrl.edit_post);
//-----------------------------------
router.get('/details/:bookname', empCtrl.details);
router.get('/delete/:bookname', empCtrl.delete_get);
router.post('/delete/:bookname', empCtrl.delete_post);
router.get("/edit/:bookname", empCtrl.edit_get);
router.post("/edit/:bookname", empCtrl.edit_post);
router.get('/details/:bookisbn', empCtrl.details);
router.get('/delete/:bookisbn', empCtrl.delete_get);
router.post('/delete/:bookisbn', empCtrl.delete_post);
router.get("/edit/:bookisbn", empCtrl.edit_get);
router.post("/edit/:bookisbn", empCtrl.edit_post);
router.get('/details/:bookauthor', empCtrl.details);
router.get('/delete/:bookauthor', empCtrl.delete_get);
router.post('/delete/:bookauthor', empCtrl.delete_post);
router.get("/edit/:bookauthor", empCtrl.edit_get);
router.post("/edit/:bookauthor", empCtrl.edit_post);
router.get('/details/:bookpages', empCtrl.details);
router.get('/delete/:bookpages', empCtrl.delete_get);
router.post('/delete/:bookpages', empCtrl.delete_post);
router.get("/edit/:bookpages", empCtrl.edit_get);
router.post("/edit/:bookpages", empCtrl.edit_post);

module.exports = router;
