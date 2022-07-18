// Configuração inicial do Express
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

// Configuração para leitura e envio de Json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas
app.use("/light", require("./routes/lightRoutes"));

// Rota inicial
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ours backend!" });
});

// Acessar através da porta 8080
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = 'LightControllerDB'

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.tev8k.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    // Mostrar mensagem de conexão
    console.log(`Conectado ao ${DB_NAME}!`);
    app.listen(8080);
  }) 
  // Mostrar o erro, caso exista
  .catch((err) => console.log(err)); 
