const express = require('express');
const router = express.Router();

const user = require('../models/userModel');

const insert = async (userName, password)=>{
    await user.create({
        userName: userName,
        password: password
    })
}

router.get('/',(req, res)=>{
    res.render('index');
});

router.post('/', (req, res)=>{
    const name= req.body.userName;
    const password= req.body.password;
    insert(name, password);
    res.render('index')
})

module.exports = router;