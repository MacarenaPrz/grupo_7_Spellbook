var express = require('express');
var router = express.Router();
let upload = require('../middleware/uploadProducts');
let userSession = require('../middleware/userSession');
let userAdmin = require('../middleware/userAdmin');

let {
    admin,
    newProduct,
    editView,
    editProduct,
    deleteProduct
        } = require('../controllers/adminController');
const userSession = require('../middleware/userSession');

// Admin 
router.get('/addProduct', userSession, userAdmin, admin);
// Admin, new product
router.post('/addProduct', upload.single('imagen'), newProduct);
// Admin, edit view
router.get('/editProduct/:id', userSession, userAdmin, editView);
// Admin, edit product
router.put('/editProduct/:id', upload.single('imagen'), editProduct);
//Admin delete product
router.delete('/deleteProduct/:id', deleteProduct);




module.exports = router;