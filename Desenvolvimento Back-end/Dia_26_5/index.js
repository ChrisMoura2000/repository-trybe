const express = require('express');
const bodyParser = require('body-parser');
const {
    validationLogin,
    createRandomToken,
    validateToken
} = require('./mids');

const app = express();
app.use(bodyParser.json())

const PORT = 3000

app.post('/login', validationLogin, createRandomToken);

app.get('/btc/price', validateToken)

// middleware de erro depois das rotas.
app.use((err, req, res, next) => {
    const { status } = err;
    return res.status(status).json(err);
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})
