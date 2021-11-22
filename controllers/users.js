const User = require("../models/Users");
const {
  linkHeader,
  validObjectId,
  validEmail,
  isEmptyObj,
} = require("./helper");
// const { isAdmin } = require("../middleware/auth");

const saveUser = async (req, res, next) => {
    try {
      const { email, password, roles } = req.body;
      const user = new User({
        email: email,
        password: password,
        roles: roles,
      });
  
      if (!validEmail(email)) {
        return next(400);
      }
  
      if (!email || !password) {
        return res.status(400).send({ message: "No hay password ni contraseña" });
      }
      if (password.length < 4) {
        return res.status(400).send("Contraseña inválida");
      }
      // user.password = await user.encryptPassword(password);
  
      const userValidated = User.findOne({ email: email });
      userValidated.then((doc) => {
        if (doc) {
          return next(403);
        }
      });
  
      const response = await user.save();
      const finalResponse = await User.findOne({ email: response.email }).select(
        "-password"
      );
      res.status(200).send(finalResponse);
    } catch (error) {
      return next(404);
    }
  }

module.exports = {
    // getUser,
    // getUsers,
    saveUser,
    // deleteuser,
    // updateuser,
  }