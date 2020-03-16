const dao = require('../models/dao')
//const bodyParser = require('body-parser')

async function listarProdutos(req, res) {
    try{
        await dao.connect()
        await dao.query('select * from empregado', function(err, data) {
            res.render('listarProdutosView', {empregados: data})
        })
    } catch(err){
        console.log(err.toString())
    }
}

function novoProduto(req, res) {
    res.render('novoProdutoView')
}

async function adicionarProduto(req, res) {
    try{
        var mat = req.body.matricula
        var nom = req.body.nome
        var sal = req.body.salario
        conexao = await dao.connect()
        var query = "insert into empregado (matricula, nome, salario) values('" + mat + "', '" + nom + "', " + sal + ")"
        await dao.query(query)
        await res.redirect('/listarProdutos')
    } catch(err){
        console.log(err.toString())
    }
}

async function pesquisarProduto(res, id) {
    //Pesquisar produto aqui
    //res.render('pesquisarProdutoView', {produto: 'produto1'})
}

async function deletarProduto(req, res) {
    try{
        var id = req.params.id
        dao.connect()
        var query = "delete from empregado where matricula = '" + id + "'"
        await dao.query(query)
        await res.redirect('/listarProdutos')
        
    } catch(err){
        console.log(err.toString())
    }
}

async function atualizarProduto(req, res) {
    try{
        var novoNome = req.body.nome
        var novoSalario = req.body.salario
        var matricula = req.body.matricula
        dao.connect()
        var query = "update empregado set nome = '" + novoNome + "', salario = " + novoSalario + " where matricula = '" + matricula + "'"
        console.log(query)
        await dao.query(query)
        await res.redirect('/listarProdutos')
    } catch(err) {
        console.log(err.toString())
    }
}

function editaProduto(req, res) {
    var id = req.params.id
    res.render('editaProduto', {id: id})
}

module.exports = { novoProduto, adicionarProduto, listarProdutos, pesquisarProduto, deletarProduto, atualizarProduto, editaProduto }