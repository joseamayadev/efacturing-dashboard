const express = require('express');
const app = express();
const Router = require('express').Router();

let data = require('../strings.json');
let transactions = require('../models/data/dataTransactions.json');


Router.get('/', (req, res) => {
    res.render('index', datos = data.es);
});

Router.get('/en', (req, res) => {
    res.render('index', datos = data.en);

});



// Traducción a portugues


Router.get('/br', (req, res) => {
    res.render('index', datos = data.br);
}).get('/br/dashboard', (req, res) => {
    res.render('main', datos = data.br.dashboard)
});

Router.get('/dashboard', (req, res) => {
    res.render('main', [datos = data.es.dashboard, transa = transactions.transactions]);
});


Router.get('/data', (req, res) => {
    res.send(transactions);
});

module.exports = Router;