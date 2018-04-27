const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Image = module.exports = mongoose.model('Image', imageSchema);

module.exports.findImageById = (id, callback) => {
    Image.findById(id, callback);
};

module.exports.findImageByImageName = (imageName, sort, callback) => {
    Image.findOne({name: imageName}).sort({createdAt: sort}).exec(callback);
};

module.exports.addImage = (image, callback) => {
    const newImage = new Image({
        name: image.filename,
        path: image.path,
    });
    newImage.save(callback)
};
