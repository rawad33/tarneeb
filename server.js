const express = require('express');
const app = express();



var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

const url = " mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/rawady";

const Mongoose = require('mongoose');
Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const userRouter = require("./routing/users");
app.use("/api/users", userRouter)


const port = process.env.PORT || 4001;
app.listen(port, () => { console.log(' listen on port', port) });


