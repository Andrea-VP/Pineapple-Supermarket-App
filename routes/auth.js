/*
    Rutas de Usuarios / Auth
    host + api/auth
*/


const { Router } = require('express');
const router = Router();

router.post('/register', (req,res) =>{
    res.json({
        ok:true
    })
})

module.exports =  router

// const initAdminUser = (app, next) => {
//     const { adminEmail, adminPassword } = process.env;
//     if (!adminEmail || !adminPassword) {
//       return next();
//     }
  
//     const adminUser = {
//       email: adminEmail,
//       password: adminPassword,
//       roles: { admin: true },
//     };
  
//     // TODO: crear usuario admin
//     const user = User.findOne({email:adminEmail});
//     user.then((doc) => {
//       if (doc) {
//         console.info('Usuario ya existe');
//         return next(200);
//       }
  
//       const newUser = new User(adminUser);
//       newUser.save();
//       console.info('El usuario ha sido creado');
//     })
//       .catch((err) => {
//         if (err !== 200) {
//           console.info('Ha ocurrido un error', err);
//         }
//       });
  
//     next();
//   };

//   module.exports = (app, next) => {


//     initAdminUser(app, next);

//   }