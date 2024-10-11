import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

const user = mongoose.model("User", userSchema);

export default user