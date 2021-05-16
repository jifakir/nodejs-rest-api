const Product = require('../models/product');

const getProducts = async (req, res, next) => {

    try{
        const products = await Product.find().exec();
        if(!products){
            res.status(400).json({message: 'Products not found.'});
            next();
        }
        res.json({products});
    }catch(err){
        res.status(404).json({message: err})
    }
};

const createProduct = async (req, res, next) => {

    const {title, description, price, variant, discount} = req.body;

    const createdProduct = new Product({
        title,
        description,
        price,
        variant,
        discount
    });
    try{
        const newProduct = await createdProduct.save();
        if(!newProduct){
            res.status(404).json({message: 'Product creation failed. Please, try again.'});
            next();
        }
        res.status(201).json({newProduct});
    }catch(err){
        res.status(400).json({message: err})
    }
};


exports.getProducts = getProducts;
exports.createProduct = createProduct;