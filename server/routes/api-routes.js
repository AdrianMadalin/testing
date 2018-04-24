const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');
const Util = require('../utils/utils');

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
    UserModel.findUserByName(req.body.username, (err, user)=>{
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
    })
});

module.exports = router;
