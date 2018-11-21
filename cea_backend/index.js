const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var data = require('./data.json')

const port = 3000

app.get('/', (req, res) => {
    res.send({ data })
})


app.listen(port)