const express = require ('express');

const app = express();


// Routes
app.get('/', (req, res) => {
    res.send('I am Alive ;)')
})

// Start listening to the server
app.listen(3000)