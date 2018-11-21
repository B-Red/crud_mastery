const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var data = require('./data.json')

const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ data })
})

app.get('/:id', (req, res) => {
    var { id } = req.params
    var filtered = data.filter(obj => {
        return obj.id == id
    })
    res.send ({ data: filtered })
})

app.post('/', (req, res) => {
    var { body } = req
    var obj = {
        id: data.length + 1,
        sport: body.sport
    }
    data.push( obj )
    res.json({ data: obj })
})

app.put('/:id', (req, res) => {
    var { body } = req
    var { id } = req.params

    var mapped = data.map(obj => {
        if(id == obj.id){
            return obj = {
                id: obj.id,
                ...body
            }
        }
        return obj
    })
    data = mapped
    res.send({ data })
})


app.listen(port)