const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Product_Name: {
        type: String,
        required: true,
        trim: true,
    },
    Product_Code: {
        type: String,
        required: true,
        trim: true,
    },
    Price: {
        type: Number,
        required: true,
        min: 0,
    },
    ImgLink: {
        type: String,
        trim: true,
    },
});

const Products = mongoose.model("Products", ProductSchema, "Products");

///
module.exports = Products;
