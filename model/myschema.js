const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const articleSchema = new Schema({

    username: String
});

 
// Create a model based on that schema
const Mydata = mongoose.model("Mydata", articleSchema);
 
 

module.exports = Mydata;

