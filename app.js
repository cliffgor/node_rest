const express = require ('express');
const  mongoose  = require('mongoose');
const app = express();
require('dotenv/config')

// IMPORT Routes
const postsRoute = require('./routes/posts');
// Middleware
app.use('/posts', postsRoute);


// Routes
app.get('/', (req, res) => {
    res.send('I am Alive ;)')
})


// Connect to MongoDb
mongoose.connect(
 process.env.DB_CONNECTION
,{ useNewUrlParser: true}, () =>
        console.log('connected to db')
);


// Start listening to the server
app.listen(4000)