var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product').then(e => console.log("MongoDB Conneted!!"));

