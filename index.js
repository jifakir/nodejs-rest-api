const express = require('express');
const mongoose = require('mongoose');

const users = require('./router/users');
const products = require('./router/products');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(users);
app.use(products);

app.get('/', (req, res, next) => {
    res.status(200).json("Hello, world");
});

// app.use((error, req, res, next) => {
//     if(res.headerSent){
//         return next(error)
//     };
//     res.status(500);
//     res.json({message: error});
//     next();
// });
app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error('Bad JSON');
    }
    next(err);
  });
mongoose.connect('mongodb+srv://jahid:58681702Jahid@cluster0.jwygn.mongodb.net/eCommerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then( () => app.listen(4500) )
.catch(err => console.log(err));