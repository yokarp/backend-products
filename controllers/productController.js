const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getProductsByExpirationDate = async (req, res) => {
        try {
        const products = await Product.find().sort({ fechaVencimiento: 1 });
        res.json(products);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    };

const getProductsByQuantity = async (req, res) => {
    try {
      const products = await Product.find().sort({ cantidad: 1 });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
    
const createProduct = async (req, res) => {
    const { nombre, fechaVencimiento, cantidad, pesoUnidad, fechaEntrada, proveedor, referenciaCompra } = req.body;
  
    const product = new Product({
      nombre,
      fechaVencimiento,
      cantidad,
      pesoUnidad,
      fechaEntrada,
      proveedor,
      referenciaCompra
    });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
 };
  
const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      await Product.findByIdAndDelete(req.params.id);
      
      res.json({ message: 'Producto eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { getProducts, getProductsByExpirationDate, getProductsByQuantity, createProduct, deleteProduct };