require('dotenv').config();
const config = require('./config');
const pkg = require('./package.json');

const authMiddleware = require('./middleware/auth');



const express = require("express");
const  { dbConnection }  = require("./database/config");
const routes = require('./routes');
const app = express();
const cors = require('cors')
const { port, portFE, secret } = config;

app.use(cors());

app.set('config', config);
app.set('pkg', pkg);


// Base de datos
dbConnection();

// console.log(process.env.PORT)
// const port = parseInt(process.env.PORT)
// const io = app(server, {
//   cors:{
//     origin: [portFE],
//     credentials: true,
//     methods: ["GET", "POST"] //son los metodos que usa internamente socke.io
//   }
// })

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(authMiddleware(secret));


routes(app, (err) => {
    if (err) {
      throw err;
    }

    app.listen( port, function(){
        console.log(`Express server is running on port ${port}`);
    });
    
  });
