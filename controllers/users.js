const User = require("../models/Users");
const {
  linkHeader,
  validObjectId,
  validEmail,
  isEmptyObj,
} = require("./helper");

const { isAdmin } = require("../middleware/auth");


const getUsers = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;

    const response = await User.paginate({}, { limit, page });

    const url = `${req.protocol}://${req.get("host") + req.path}`;

    const links = linkHeader(limit, page, response.totalPages, url, response);

    res.links(links);
    return res.status(200).json(response.docs);
  } catch (error) {
    return next(404);
  }
}; 

const saveUser = async (req, res, next) => {
    try {
      const { username, password, email, name ,lastName, roles } = req.body;

      const user = new User({
        username: username,
        password: password,
        email: email,
        name: name,
        lastName: lastName,
        roles: roles,
      });

      if (!validEmail(email)) {
        return next(400);
      }

      if (!email || !password) {
        return res.status(400).send({ message: "No hay email ni contraseña" });
      }
      if (password.length < 4) {
        return res.status(400).send("Contraseña inválida");
      }
  
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
      return next('404');
    }
  }

  const updateuser = async (req, res, next) => {
    try {
      const userId = req.params.uid;
      const update = req.body;
  
      let response = null;
  
      if (validObjectId(userId)) {

        if (!isAdmin(req) && req.decoded.id !== userId) {
          return next(403);
        }
        if (isEmptyObj(user)) {
          return next(400);
        }

        response = User.findByIdAndUpdate(
          userId,
          { $set: update },
          { new: true, useFindAndModify: false }
        );
        
      } else {
        if (isAdmin(req)) {

          const validEmail = await User.findOne({ email: userId });
          if (!validEmail) {
            return next(404);
          }
        } else {
          if (req.decoded.email !== userId) {
            return next(403);
          }
          if (req.decoded.email === userId && update.roles) {
            return next(403);
          }
        }
        if (isEmptyObj(update)) {
          return next(400);
        }
  
        response = await User.findOneAndUpdate(
          { email: userId },
          { $set: update },
          { new: true, useFindAndModify: false }
        );
      }

      if (!response) {
        return next(403);
      }
  
      return res.status(200).send(response);
    } catch (error) {
      next(404);
    }
  }
  

module.exports = {
    // getUser,
    getUsers,
    saveUser,
    // deleteuser,
    updateuser,
  }