const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

pageDetails = {
    title: 'Rushil Johnson | Coach',
    siteName: 'CoachedByRushil',
    metatags: [
        "fitness",
        "weight-training",
        "loose-weight",
        "diet-plans",
        "body-building"
    ],
    coach: 'Rushil Johnnson',
    description: 'Rushil leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise (exercises for the heart and blood system), strength training, and stretching'
};

app.engine('hbs', engines.handlebars);
app.set('views', "./src/views");
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public,max-age=300,s-maxage=600');
    res.render(
        'index', {
            pageDetails
        }
    );
});

// POST /login gets urlencoded bodies
app.post('/home', urlencodedParser, function(req, res) {
    res.set('Cache-Control', 'public,max-age=300,s-maxage=600');

    const user = req.body.name;

    res.render(
        'dashboard', {
            pageDetails,
            user
        }
    );
    // res.send(JSON.stringify(req.body));
});


exports.app = functions.https.onRequest(app);