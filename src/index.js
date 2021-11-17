//FIle to run the server
const express = require('express');
const morgan = require('morgan');

//Module to unify directories
const path = require('path');

//get the database connection
const { mongoose } = require('./database')

//Will instance the server
const app = express();


//Setting

//set the port eiather from the cloud o the local env
app.set('port', process.env.PORT || 3000);


//Middlewares----------
//functions that will run before the routes

//to show petition made by the client on the console
app.use(morgan('dev'));


//every tine we get data from the server, this function
//will check if the data is in format json
app.use(express.json());

//----------------------

//Routes----------------

app.use('/api/tasks', require('./routes/task.routes'));

//Routes----------------
//console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

//Static files



//run the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});





//Notes:   -D indica que es una dependencia de desarrollo
//nodmon: will update the serve everytime there is a change

//Modules
//npm install express
//npm install nodmon -D
//npm install morgan  :  to obsereve on console, petition made by the client o browser
//npm install mongoose : connect to the db and define the data structure
//npm i webpack -D //traducir el codigo
//npm i webpack-cli -D
//npm i react react-dom 
// deprecated *npm i babel-core babel-loader babel-preset-react  babel-preset-env -D: traducir codigo jsx
//npm install --save-dev @babel/core  (2021 )
//npm i @babel/preset-react -D 
//npm i @babel/preset-env -D

