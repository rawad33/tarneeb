const express = require("express")
const app = express();
const mongoose = require("mongoose")
const router = express.Router()
const nodemailer = require('nodemailer');

const UserSchema = require('../schemas/UserSchema')
const UserModel = mongoose.model("UserModel", UserSchema);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rawawdservicetest@gmail.com',
        pass: 'SuperSecretPassword' // naturally, replace both with your real credentials or an application-specific password
    }
});

router.post('/register', (req, res) => {
    const { userEmail, name, imgurl, password } = req.body
    let newUser = new UserModel({
        userInfo: {
            employeeName: name,
            employeeEmail: userEmail,
            employeePic: imgurl,
            password: password
        }, aactive: true
    })
    newUser.save().then(doc => {
        res.send({ register: true })
    })
})

module.exports = router;