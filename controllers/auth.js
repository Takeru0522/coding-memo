const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Sign Up
router.post('/signUp', async (req, res) => {
    const newUser = {};
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    try {
        const foundUser = await User.findOne({ email: newUser.email });

        if(foundUser){
            return res.json({
                status: 400,
                msg: 'User already exists'
            });
        }
        const createdUser = await User.create(newUser);
        req.session.logged = true;
        req.session.username = createdUser.username;

        // bcrypt
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(createdUser.password, salt, (err, hash) => {
                createdUser.password = hash;
                createdUser.save()
            });
        })
        
        res.json({
            status: 200,
            data: createdUser
        })
    } catch(err) {
        console.log(err)
    }
})


module.exports = router;
