const express = require('express')
const app = express();

app.use(express.json())

//let estoque = "Lapis"
let estoque = [
    {nome: "lapis",valor:1.50, quantidade:  25},
    {nome: "Caderno", valor: 30.99, quantidade: 30},
    {nome: "Borracha", valor: 4.59, quantidade: 29}
]

const porta = 3000;

app.get('/produtos', (req, res) => {
    res.json(estoque)
})

app.post('/produtos', (req, res) => {
    const novoProduto = req.body;

    estoque.push(novoProduto)

    res.send("produto: " + novoProduto.nome + " Cadastrado!")
});

app.listen(porta, () => {
    console.log("servidor rodando na porta: " + porta)
})