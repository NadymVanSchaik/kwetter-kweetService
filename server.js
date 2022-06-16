const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const mongoose = require('mongoose')
require('dotenv/config')

const config = {
    name: 'kweet-service',
    port: 3001,
    host: '0.0.0.0',
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Import
const kweetsRoute = require('./routes/kweets');
app.use('/kweets', kweetsRoute);


//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
})

mongoose.connect(process.env.DB_CONNECTION) 
.then(() =>{
    console.log("connected to DB");
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    logger.info(`${config.name} running on ${config.host}:${config.port}`);
});