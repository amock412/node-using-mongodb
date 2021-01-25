import express from 'express';
import bodyParser from 'body-parser';

const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/productsdb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
