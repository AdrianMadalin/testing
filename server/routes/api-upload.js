const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

router.post('/test', (req, res) => {
    const uploadPath = path.join(__dirname, ('../../client/src/assets/images'));

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    let upload = multer({storage: storage}).single('image');

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

module.exports = router;