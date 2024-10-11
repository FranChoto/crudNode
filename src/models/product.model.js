import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    quantity : {
        type : Number,
        required : true
    },
    price_per_unit : {
        type : Number,
        required : true
    }
},
{
    timestamps : true
})

const product = mongoose.model("Product", productSchema);

export default product