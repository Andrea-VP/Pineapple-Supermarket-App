const express = require("express");
const app = express();

// app.get("/",function(req, res){
//    res.send("Express here!")
// })
app.use("/users/", require("./routers/usersRoute"))
app.listen(3001,function(){
    console.log("express server is running on port 3001");
});