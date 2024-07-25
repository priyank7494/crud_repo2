var express = require('express');
var mongoose = require('mongoose');

var Productrouter = require('./routes/Routes');
require('./service/db');

var app = express();
var PORT = 8000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', Productrouter);



app.listen(PORT, () => console.log(`Server run on PORT : ${PORT} !!!!`));