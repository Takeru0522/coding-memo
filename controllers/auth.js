const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Should be moved to userController
router.get('/', async(req, res) => {
    try {
        const allUsers = await User.find()
        res.json({
            status: 200,
            data: allUsers
        });
    } catch(err) {
        res.send(err);
    }
})

// Sign Up
router.post('/signUp', async (req, res) => {
    const newUser = {};
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    try {
        const createdUser = await User.create(newUser);
        req.session.logged = true;
        req.session.username = createdUser.username;

        res.json({
            status: 200,
            data: createdUser
        })
    } catch(err) {
        console.log(err)
    }
})


module.exports = router;
