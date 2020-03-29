const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connection = require('./database/connection')

app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).json({
        ok:true
    })
})

app.post('/cidade',async (req,res) => {
    const { cityName, state, country } = req.body
    await connection('city').insert({ cityName, state, country })
    res.json({
        ok:"Cidade inserida com sucesso!"
    })
})

app.listen(PORT,e => {
    if(e) throw new Error('Erro na conexao')
    console.log('server rodando na porta '+ PORT)
})