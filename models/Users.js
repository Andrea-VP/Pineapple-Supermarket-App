// const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    roles: {
        admin: {
        type: Boolean
        },
    },
    dateEntry: {
        type: Date,
        required:false,
        default: Date.now()
      },
});

// userSchema.plugin(mongoosePaginate);

// userSchema.pre('save', function(next){
//   const user = this; //const
//   if(!user.isModified('password')) return next()

//   bcrypt.hash(user.password,10,(err, passwordHash) =>{
//     err && next(err);

//     user.password = passwordHash;
//     next();
//   })
// })

// userSchema.pre('findOneAndUpdate', function(next){
//   const user = this; //const
//   if(!user._update.$set.password) return next()

//   bcrypt.hash(user._update.$set.password,10,(err, passwordHash) =>{
//     err && next(err);

//     user._update.$set.password = passwordHash;
//     next();
//   })
// })



module.exports = model('Users', userSchema);
