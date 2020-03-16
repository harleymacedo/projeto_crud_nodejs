const express = require('express')
const methodOverride = require('method-override')
const app = express()
const bodyParser = require('body-parser')
const produtosController = require('./controllers/produtosController')

app.use(methodOverride('_method', {methods: ['GET', 'PUT', 'POST']}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({extended: false}))
var codificacao = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.get('/listarProdutos', produtosController.listarProdutos) //ok
app.get('/novoProduto', produtosController.novoProduto) //ok
app.post('/adicionarProduto', codificacao, produtosController.adicionarProduto) //ok
app.delete('/deletarProduto/:id', codificacao, produtosController.deletarProduto) //ok
app.get('/editaProduto/:id', codificacao, produtosController.editaProduto)
app.put('/atualizarProduto', codificacao, produtosController.atualizarProduto)

app.listen(80, function() {
    console.log('app rodando!')
})