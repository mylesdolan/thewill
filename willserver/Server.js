const express = require('express');
const app = express();
const will = require('./routes/api/will');
const mongoose = require('mongoose');

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const bodyParser = require('body-parser');

const urlencodeParser = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();

app.use(urlencodeParser);
app.use(jsonParser);


//Cors
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(express.static('client/build'));

app.use(cors(corsOptions));

app.use('/api/will',will);

const port = process.env.PORT || 3001;

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


app.listen(port)
