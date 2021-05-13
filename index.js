const express = require('express');
const mongoose = require('mongoose');

const users = require('./router/users');

const app = express();

app.use(users);
app.get('/', (req, res) => {
    console.log(req.body);
    res.status(200).json("Hello, world");
})


mongoose.connect('mongodb+srv://jahid:58681702Jahid@cluster0.jwygn.mongodb.net/eCommerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}).then( () => app.listen(4500) ).catch(err => console.log(err));