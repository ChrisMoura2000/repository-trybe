const express = require('express');
const ProductServices = require('../services/productService');
const router = express.Router();

router.get('/list-products', ProductServices.listProducts);

router.get('/get-by-id/:id', ProductServices.getById);

router.post('/add-user', ProductServices.addUser);

router.delete('/delete-user/:id', ProductServices.deleteUser);

router.put('/update-user/:id', ProductServices.updateUser);

module.exports = router;