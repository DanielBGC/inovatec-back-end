const express = require('express');
const cors    = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(cors({
  origin: '*'
}));

/* CADASTRO CLIENTES */
app.get('/clientes', function (req, res) {
  console.log(req.query)
  res.send("GET clientes");
});

app.post('/clientes', function (req, res) {
  console.log(req.body)
  res.send("POST clientes");
});


/* CADASTRO VEÍCULOS */
app.get('/veiculos', function (req, res) {
  console.log(req.query)
  res.send("GET veiculos");
});

app.post('/veiculos', function (req, res) {
  console.log(req.body)
  res.send("POST veiculos");
});


/* CADASTRO ESTABELECIMENTOS */
app.get('/estabelecimentos', function (req, res) {
  console.log(req.query)
  res.send("GET estabelecimentos");
});

app.post('/estabelecimentos', function (req, res) {
  console.log(req.body)
  res.send("POST estabelecimentos");
});

  
/* CADASTRO FÓRUM */
app.get('/forum', function (req, res) {
  console.log(req.query)
  res.send("GET forum");
});

app.post('/forum', function (req, res) {
  console.log(req.body)
  res.send("POST forum");
});
  

app.listen(PORT, function() {
  console.log("Server is running in port " + PORT);
});