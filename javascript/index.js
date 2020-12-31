const express = require("express");
const app = express();
const port = 8000;

app.use(express.static('/'));
app.use('/', express.static(__dirname + '/'));


app.listen(port, () => console.log(`Servidor escuchando en el puerto: ${port}`));