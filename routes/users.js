const User = require('../models/Users');
const {
  requireAuth,
  requireAdmin,
} = require('../middleware/auth');

// const {
//   getUsers, getUser, deleteuser, updateuser, saveUser,
// } = require('../controller/users');


const {
//   getUsers, getUser, deleteuser, updateuser, 
  saveUser,
} = require('../controllers/users')

const initAdminUser = (app, next) => {
  const { adminUsername, adminPassword, adminEmail, adminName, adminLastname } = app.get('config');
  if (!adminEmail || !adminPassword) {
    return next();
  }

  const adminUser = {
    username: adminUsername ,
    password: adminPassword,
    email: adminEmail,
    name: adminName,
    lastName: adminLastname,
    roles: { admin: true },
  };

  // TODO: crear usuaria admin - READY
  const user = User.findOne({email:adminEmail});
  user.then((doc) => {
    if (doc) {
      console.info('Administrador ya existe');
      return next(200);
    }

    const newUser = new User(adminUser);
    newUser.save();
    console.info('El usuario administrador ha sido creado');
  })
    .catch((err) => {
      if (err !== 200) {
        console.info('Ha ocurrido un error', err);
      }
    });

  next();
};


module.exports = (app, next) => {

//   app.get('/users', requireAdmin, getUsers);

//   app.get('/users/:uid', requireAuth, getUser);

  app.post('/users',requireAdmin, saveUser);


//   app.put('/users/:uid', requireAuth, updateuser);

//   app.delete('/users/:uid', requireAuth, deleteuser);

  initAdminUser(app, next);
};
