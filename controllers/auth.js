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

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if(!email || !password) {
            return res.json({
                status: 400,
                msg: 'Please enter all fields'
            });
        }
        const foundUser = await User.findOne({ email });
        console.log(foundUser.password)
        console.log(password)
        if(!foundUser) {
            return res.json({
                status: 400,
                msg: 'User does not exist'
            });
        }
        const isMatch = await bcrypt.compare(password, foundUser.password);
        console.log(isMatch)
        if(isMatch) {
            req.session.logged = true;
            req.session.username = foundUser.username;
            res.json({
                status: 200,
                data: foundUser,
                msg: 'Login successful'
            })
            console.log('Login successful');
        } else {
            return res.json({
                status: 400,
                msg: 'Invalid password'
            });
        }
    } catch(err) {
        console.log(err);
    }
})


module.exports = router;
