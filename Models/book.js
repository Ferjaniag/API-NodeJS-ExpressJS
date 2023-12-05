const mongoose=require('mongoose') 


const bookSchema=new mongoose.Schema({

    id :{
        type:Number,
        required:false
    },

title : {
    type: String,
    required :true 
} , 
author: {
    type: String,
    required :true
} , 
price : {
    type: Number,
    required :false
}

})


module.exports = mongoose.model('Book ',bookSchema)  