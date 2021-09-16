const { add, getAll, getById, update, exclude } = require('../models/productModel');

const listProducts = async (req, res) => {
    const products = await getAll();
  
    res.send(products);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const product = await getById(id);
  
    res.send(product);
}

const addUser = async (req, res) => {
    const { name, brand } = req.body;
  
    const newProduct = await add(name, brand);
  
    res.send(newProduct);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const products = await exclude(id);
  
    res.send(products);
}

const updateUser = async (req, res) => {
    const { name, brand } = req.body;
    const { id } = req.params;
  
    const products = await update(id, name, brand);
  
    res.send(products);
}

module.exports = { listProducts, getById, addUser, deleteUser, updateUser };
