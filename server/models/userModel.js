const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.findUserById = (id, callback) => {
  User.findById(id,callback);
};

module.exports.findUserByName = (username, callback) =>{
  User.findOne({username}, callback);
};

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                throw err
            } else {
                newUser.password = hash;
                newUser.save(callback);
            }
        });
    })
};

module.exports.comparePassword = (inputPassword, hash, callback) => {
    bcrypt.compare(inputPassword, hash, (err, isMatch) => {
        if (err) {
            throw err;
        } else {
            callback(null, isMatch);
        }
    });
};
