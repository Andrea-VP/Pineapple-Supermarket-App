const mongoose = require('mongoose');
const config = require('../config');

const { dbUrl } = config;

const dbConnection = async() => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        
    } catch(error) {
        throw new Error('Error a la hora de inicializar BD')
    }
}

module.exports =  {dbConnection}