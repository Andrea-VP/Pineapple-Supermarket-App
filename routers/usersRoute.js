const express = require("express");
router = express.Router();
userRoute = require("../controllers/usersControllers");
router.get("/", userRoute.usersController);
module.exports = router;
