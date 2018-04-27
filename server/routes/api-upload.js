const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Image = require('../models/imageModel');

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

router.get('/api-images/kungfu', (req, res) => {
    Image.find({}).sort({createdAt: -1}).exec((err, foundImage) => {
        if (err) {
            console.error(`Error`, err);
            console.error('Error uploading the image service');
            res.status(400).send({error: 'Error uploading the image service'});
            return next();
        } else {
            res.status(200).send({
                message: 'success',
                images: foundImage
            });
        }
    })
});

router.post('/api-images/kungfu', (req, res) => {
    const uploadImagePath = path.join(__dirname, ('../../client/src/assets/images/gallery'));

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadImagePath);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    const upload = multer({storage: storage}).array('image', 5);

    upload(req, res, function (err) {
        if (err) {
            console.error(`Error`, err);
            console.error('Error uploading the image service');
            res.send({error: 'Error uploading the image service'});
            res.status(400);
            return next();
        } else {
            const images = [];
            const checkMimeTypr = async () => {
                await req.files.forEach((image) => {
                    console.log(image)
                    if (image.mimetype === 'image/jpeg') {
                        console.info(`Success`, `Image uploaded to the server`);
                        images.push(image);
                        Image.addImage(image, (err) => {
                            if (err) {
                                console.log(`Error saving file to the database`);
                                throw err;
                            }
                        })
                    } else {
                        fs.unlink(image.path, (err) => {
                            if (err) {
                                console.log({
                                    err,
                                    message: 'Error removing the image from the server'
                                });
                            }
                        })
                    }
                });
                return images;
            };

            checkMimeTypr().then((response) => {
                console.log(response);
                res.send({
                    message: `success`,
                    image: response
                });
            }).catch((err) => {
                console.log(err)
            });
        }
    });
});

router.put('/api-images/kungfu', (req, res) => {
    Image.findImageById(req.body.id, (err, foundImage) => {
        if (err) {
            console.error(`Error`, err);
            console.error('Error uploading the image service');
            res.status(400).send({error: 'Error uploading the image service'});
            return next();
        } else {
            Image.findByIdAndRemove(foundImage._id, (err) => {
                if (err) {
                    console.error(`Error`, err);
                    console.error('Error uploading the image service');
                    res.status(400).send({error: 'Error uploading the image service'});
                    return next();
                } else {
                    console.log(`route hit`);
                    fs.unlink(foundImage.path, (err) => {
                        if(err){
                            console.error(`Error`, err);
                            console.error('Error uploading the image service');
                            res.status(400).send({error: 'Error uploading the image service'});
                            return next();
                        } else {
                            res.status(200).send({
                                success: true,
                                message: `Image was removed from the database`,
                                imageName: foundImage
                            })
                        }
                    });
                }
            })
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
