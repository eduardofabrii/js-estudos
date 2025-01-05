const express    = require('express');
const exphbs = require('express-handlebars');
let app          = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const Job        = require('./models/Job')
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Server rodando em localhost:${PORT}`)
});

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))

// Handlebars
// O path reconhece qual é o diretório base, e o __dirname indica essa base, acessando a pasta views do projeto
app.set('views', path.join(__dirname, 'views'));

// Indica o arquivo principal de layout da aplicação
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// DB Connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou com sucesso ao Banco de Dados");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err);
    });

// Routes
app.get('/', (req, res) => {

    let search = req.query.job;
    let query = '%' + search + '%'; // PH busca por PHP, Word busca por WordPress, Ja busca por Java...

    if (!search) {
        // Ordena por data mais recente e renderiza a view com as jobs que estão nela
        Job.findAll({order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs
            });
        })
        .catch(err => console.log(err));
    } else {
        // Ordena por data mais recente e renderiza a view com as jobs que estão nela
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
                ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {
                jobs, search
            });
        })
        .catch(err => console.log(err));
    }
});

// Jobs Routes
app.use('/jobs', require('./routes/jobs'));

