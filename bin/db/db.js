const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/TestCases');
let  mongoose= Mongoose.connection.then(function () {
    console.log("CONNECTED");
}).catch(function () {
    console.log("NOT CONNECTED");
});

let db={};
db.mongoose=mongoose;
db.Mongoose=Mongoose;

const  tests=require('../schemas/tests.js');

db.test=tests.instance(Mongoose);

module.exports=db;