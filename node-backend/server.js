
import CalcValor from './routes/CalcValor'


const PORT = 8888;
const express = require('express')
const app = express();


app.use('/' , CalcValor)

app.listen(PORT)