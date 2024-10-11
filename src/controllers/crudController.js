import Product from "../models/product.model.js";

const crudController = {
    async getAll(req, res) {
        try {
            const response = await Product.find();
            res.status(200).json({message: "Products found", response });
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    async getOneById(req, res) {
        try{
            const response = await Product.findById(req.params.id);
            res.status(200).json({message: "Product found", response });
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    async getByName(req, res) {
        try{
            const response = await Product.find();
            const filtered = response.filter(product => product.name.includes(req.query.name));
            res.status(200).json({message: "Product found by name", filtered });
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    async postOne(req, res) {
        try {
            const newProduct = new Product({
                name: req.body.name,
                quantity: req.body.quantity,
                price_per_unit: req.body.price_per_unit
            })
            const response = await newProduct.save()
            res.status(201).json({message: "Product created", response });
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    async deleteOne(req, res) {
        try {
            const response = await Product.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Product deleted", response });
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    },
    async updateOne(req, res) {
        try {
            const response = await Product.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: "Product updated", response });
        } catch (err) {
            res.status(500).json({ message: "An error has ocurred", error: err.message });
        }
    }

}

export default crudController