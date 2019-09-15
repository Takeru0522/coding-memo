const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json({
            status: 200,
            data: allUsers
        });
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;