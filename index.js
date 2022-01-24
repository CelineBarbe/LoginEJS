const express = require('express');
const morgan = require('morgan');
const router = require('./app/router');

const app = express();

// moteur de rendu
app.set('view engine', 'ejs');
app.set('views', './views');

// LOGGER : on utilise le module morgan, qui va log toutes les requêtes sur notre serveur
app.use(morgan('dev'));

// le traitement des données POST
app.use( express.urlencoded({extended: true}) );

// ROUTAGE
app.use(router);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});