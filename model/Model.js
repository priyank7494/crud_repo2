var {Schema , model} = require('mongoose');

var ProductSchema = new Schema({
    name:{
        type:String,
    },
    price:{
        type:String,
    },
    description:{
        type:String,
    }

});


module.exports = model('product', ProductSchema);