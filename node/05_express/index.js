let express = require('express');
let app = express();

// URL principal que responde imediatamente
app.get('/', function(req, res) {
    res.send("Primeira rota com Express :D")
})

app.get('/teste', function(req, res) {
    res.send("Teste de rota /teste")
})

app.listen(8000, function() {
    console.log("Server rodando na porta 8000.")
});