var mongoose = require('mongoose');
var categorySchema = mongoose.Schema({
    categoryName : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true 
    }
})

module.exports = mongoose.model("category",categorySchema);