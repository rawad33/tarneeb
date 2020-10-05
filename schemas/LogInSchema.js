const mongoose = require("mongoose")

const LogInSchema = new mongoose.Schema({

    id: String,
    employeeName: String,
    employeeEmail: String,
    employeePic: String,
    status: Boolean,
    time: Number


})

module.exports = LogInSchema