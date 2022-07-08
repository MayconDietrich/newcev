// SQL - linguagem para consulta de banco de dados
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = 6996;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes, () => {
});

app.listen(PORT, () => {
  console.log(`API is listening on http://localhost:${PORT}`)
});