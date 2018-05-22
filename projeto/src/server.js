const port = 3004

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send({ name: 'Notebook', price: 100.0})
})

app.get('./produtos/:id', (req, res) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        name: req.body.nome,
        price: req.body.preco
    })
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})