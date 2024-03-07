const express = require('express');
const clientes = require('./clienteRoute');
const app = express();
const port = '3700';

app.use(express.json());

app.use('/clientes',clientes);

app.listen(port, () => {
  console.log(`Servidor rodando ${port}`);
});
