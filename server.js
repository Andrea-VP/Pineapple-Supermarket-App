require('dotenv').config();
const config = require('./config');


const express = require("express");
const  { dbConnection }  = require("./database/config");
const routes = require('./routes');
const app = express();

const { port, dbUrl, secret } = config;

app.set('config', config);

// Base de datos
dbConnection();

// console.log(process.env.PORT)
// const port = parseInt(process.env.PORT)


routes(app, (err) => {
    if (err) {
      throw err;
    }

    app.listen( port, function(){
        console.log(`Express server is running on port ${port}`);
    });
    
  });
