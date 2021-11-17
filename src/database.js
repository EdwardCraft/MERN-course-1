//Archive to make a conection to the database 
//and then use this archive in index.js 

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-task';

mongoose.connect(URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));


module.exports = mongoose; 


