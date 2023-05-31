
const express = require("express");

const app = express();

const PORT = 5000;

const router = require('./router');

app.use(express.json());
app.use(router);


app.listen(PORT, ()=> {
    console.log(`Servidor levantado y a la escucha en el puerto ${PORT}`);
})