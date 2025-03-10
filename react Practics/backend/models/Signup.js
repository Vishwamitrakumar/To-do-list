
const  mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = new Schema({
     name:String,
     email:String,
     password:Number,
})
module.exports = mongoose.model("signup" , data);