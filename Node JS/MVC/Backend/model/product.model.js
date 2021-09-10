let mongoose = require("mongoose")

mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id : Number,
    pname : String,
    price : Number
});

//using schema creating model
//1st parameter collection name
let productModel = mongoose.model("Product",productSchema);

module.exports = productModel;