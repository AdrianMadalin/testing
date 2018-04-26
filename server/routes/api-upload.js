const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const uploadSingleFile = (path, file) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    return multer({storage: storage}).single(file);
};

router.post('/test', (req, res) => {
    const uploadImagePath = path.join(__dirname, ('../../client/src/assets/images'));
    const upload = uploadSingleFile(uploadImagePath, 'image');

    upload(req, res, function (err) {
        if (err) {
            console.error(`Error`, err);
            console.error('Error uploading the image service');
            res.send({error: 'Error uploading the image service'});
            res.status(400);
            return next();
        } else {
            console.info(`Success`, `Image uploaded to the server`);
            console.info(req.file);

            res.send({
                message: `success`,
                image: req.file
            });
        }
    });
});

router.post('/movie', (req, res) => {
    const uploadVideoPath = path.join(__dirname, ('../../client/src/assets/videos'));
    const upload = uploadSingleFile(uploadVideoPath, 'movie');

    upload(req, res, (err) => {
        if (err) {
            console.error(`Error`, err);
            console.error('Error uploading the video service');
            res.send({error: 'Error uploading the video service'});
            res.status(400);
            return next();
        } else {
            console.info(`Success`, `Video uploaded to the server`);
            console.info(req.file);

            res.send({
                message: `success`,
                image: req.file
            });
        }
    });
});


// https://www.facebook.com/LocdejoacaKPKP/
module.exports = router;