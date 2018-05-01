const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');
const Util = require('../utils/utils');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

router.post('/regadmin', (req, res) => {
    if (req.body.secret === 'qqq') {
        const user = new UserModel({
            username: req.body.username,
            password: req.body.password,
        });

        UserModel.addUser(user, (err) => {
            if (err) {
                res.send({
                    message: `error`,
                    error: err
                })
            } else {
                res.send({
                    message: `success`,
                    body: user
                })
            }
        });
    }
});

router.post('/logadmin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findUserByName(username, (err, user) => {
        if (err) {
            res.send({
                message: `error`,
                error: err
            })
        } else if (!user) {
            return res.json({
                success: false,
                message: `user not found`
            })
        } else {
            UserModel.comparePassword(password, user.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }

                if (isMatch) {
                    const token = jwt.sign({data:user}, config.secret,{
                        expiresIn: `1h`
                    });
                    res.json({
                        success: true,
                        token: `Barrer ${token}`,
                        user: {
                            id: user._id,
                            username: user.username
                        }
                    })
                } else {
                    return res.json({
                        success: false,
                        message: `wrong password`
                    })
                }
            });
        }
    })
});

module.exports = router;
