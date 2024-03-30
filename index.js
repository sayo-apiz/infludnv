const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//site
app.get('/', async (req, res) => {
  res.sendFile('index.html', { root: __dirname })
});



const porta = process.env.PORT || 5000;
//iniciando...
app.listen(porta, () => console.log("site Online na porta:", porta));
