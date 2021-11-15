const express = require("express");


require('dotenv').config();

const  {dbConnection}  = require("./database/config");


const app = express();

//const routes = require("./routers");



// Base de datos
dbConnection();



app.get("/",function(req, res){
   res.send("Express here!")
})

//app.use("/users/", require("./routers/usersRoute"))

//app.use('/auth', require("./routers/auth"))

// console.log(process.env.PORT)


app.listen( 4000, function(){
    console.log(`express server is running on port ${process.env.PORT}`);
});



// routes(app, (err) => {
//     if (err) {
//       throw err;
//     }
  
//     //app.use(errorHandler);
  
//     app.listen(port, () => {


//         console.info(`express server is running on port ${process.env.PORT}`);
//     });
//   });