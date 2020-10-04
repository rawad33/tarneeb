const express = require("express")
const app = express();
const mongoose = require("mongoose")//DB driver
const router = express.Router()

const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
//A simple module to validate an e-mail address
var validator = require("email-validator");
const UserSchema = require('../schemas/UserSchema')
const LogInSchema = require('../schemas/LogInSchema')
const UserModel = mongoose.model("UserModel", UserSchema);
const LogInModel = mongoose.model("LogInModel", LogInSchema)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rawawdservicetest@gmail.com',
        pass: 'SuperSecretPassword' // naturally, replace both with your real credentials or an application-specific password
    }
});

//hashpassword
const bcrypt = require("bcrypt")
const saltRounds = 10

let secret = require("../server")



router.post('/register', (req, res) => {
    const { userEmail, name, imgurl, password } = req.body
    let regex = /[^A-Za-z0-9]/
    let containSepcChar = regex.test(password)
    if (!containSepcChar) {
        if (validator.validate(userEmail)) {
            UserModel.find({ "userInfo.employeeEmail": userEmail }).then(async checkEmail => {
                if (checkEmail.length > 0) {
                    return (res.send({ success: false, error: "Email is already in use" }))
                }
                else {
                    const salt = await bcrypt.genSalt(saltRounds)
                    const hashpassword = await bcrypt.hash(password, salt)
                    await UserModel.insertMany(
                        {
                            userInfo: {
                                employeeName: name,
                                employeeEmail: userEmail,
                                employeePic: imgurl,
                                password: hashpassword

                            },
                            active: true,
                            time: null
                        })
                    res.send({ success: true, error: null })
                }

            })
        }
        else { res.send({ success: false, error: "Email not valid" }) }
    }
    else {
        res.send({ success: false, error: "No Special Characters or White Space allowed in User Password!" })
    }
})

router.post('/logIn', (req, res) => {
    const { userEmail, password } = req.body

    if (validator.validate(userEmail)) {

        UserModel.find({ "userInfo.employeeEmail": userEmail }).then(async checkEmail => {

            if (checkEmail.length > 0) {
                const isMatch = await bcrypt.compare(password, checkEmail[0].userInfo.password)
                if (isMatch) {
                    if (checkEmail[0].active == true) {
                        await LogInModel.insertMany({
                            id: checkEmail[0]._id,
                            employeeName: checkEmail[0].userInfo.employeeName,
                            employeeEmail: checkEmail[0].userInfo.employeeEmail,
                            employeePic: checkEmail[0].userInfo.employeePic,
                            status: true,
                            time: new Date().getTime()

                        })
                        const token = await jwt.sign({

                            name: checkEmail[0].userInfo.employeeName,
                            userName: checkEmail[0].userInfo.employeeEmail,
                            userPic: checkEmail[0].userInfo.employeePic
                        },
                            secret
                        );
                        res.cookie("loginToken", token, {
                            maxAge: 172800000,
                        });
                    }
                    res.send({ success: true })
                } else { res.send({ success: false, error: "Wrong Password" }) }

            } else { res.send({ success: false, error: "Undefined Email" }) }
        })

    } else {
        res.send({ success: false, error: "Enter Valid Email" })
    }
})

router.post('/logout', (req, res) => {
    const { userName, userEmail } = req.body;
    LogInModel.deleteOne({ 'employeeEmail': userEmail }).then(res.send({ success: true, error: '' }))
})

router.post('/connectedUsers', (req, res) => {
    const { userEmail } = req.body
})



module.exports = router;