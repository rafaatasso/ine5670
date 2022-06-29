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
app.use("/client", require("./routes/clientRoutes"));

app.use("/vehicle", require("./routes/vehicleRoutes"));

app.use("/location", require("./routes/locationRoutes"));

app.use("/reservation", require("./routes/reservationRoutes"));

app.use("/unlocking", require("./routes/unlockingRoutes"));

// app.use("/billing", require("./routes/billingRoutes"));

// Rota inicial
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the rent cars! To add a client, please use /client, for add a vehicle /vehicle, for a location /location, for a reservation /reservation, for lock/unlock use just /unlocking and for know your billing /billing" });
});

// Acessar através da porta 8080
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = 'CarRentDB'

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
