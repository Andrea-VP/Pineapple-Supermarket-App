const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        console.log('DB online')
        const Cat = mongoose.model('Cat', { name: String });

        const kitty = new Cat({ name: 'Carla' });
        kitty.save();

        console.log(kitty)

    } catch(error) {
        throw new Error('Error a la hora de inicializar BD')
    }
}

module.exports =  {dbConnection}