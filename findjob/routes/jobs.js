const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send("Deu boa campeão! :D");
});

// Form da rota de envio
router.get('/view/:id', (req, res) => {

})

// Detalhe da vaga → view/1, view/2
router.get('/view:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
    }).then(job => {
        res.render('view', {
            job
        });
    }).catch(err => console.log(err))
);

router.get('/add', (req, res) => {
    res.render('add');
})

// Adicionar Job via Post
router.post('/add', (req, res) => {
    // Propriedade Descruturing para criar várias variaveis e alimentar com a requisição do BodyParser
    let {title, description, salary, company, email, new_job} = req.body;

    // Inserindo dados
    Job.create({
        title, description, salary, company, email, new_job
    })
    // Ao adicionar, volta para a home através da rota
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router