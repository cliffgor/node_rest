const express = require('express')

const router = express.Router()

router  .get('/', (req, res) => {
    res.send('I am Alive at posts ;)')
}) 

module.exports = router
