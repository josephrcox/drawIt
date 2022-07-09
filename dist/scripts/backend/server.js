if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const { response } = require('express');
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.set('layout', 'layouts/layout')

app.use(express.static(path.join(__dirname, '../../../')));
app.set('views',path.join(__dirname, '../../', '/views'))
app.use(express.json())
app.use(expressLayouts)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATEBASE_URL, {
	
})
const connection = mongoose.connection;

connection.once("open", function(res) {
	console.log("Connected to Mongoose!")
	connectedToDB = true
}); 


app.get('/', (req,res) => {
    res.render('home.ejs')
})



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});