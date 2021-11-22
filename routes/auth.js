const {
    signIn
  } = require('../controllers/auth');
  
  
  module.exports = (app, nextMain) => {

     app.post('/auth', signIn);
  
    return nextMain();
  };
  