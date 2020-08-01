const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const serviceAccount = require('./webprojects-afda2-firebase-adminsdk-4lxi8-e63e4e89ef.json');

const db = admin.firestore();

// Reference messages collection
const docRef = db.collection('messages').doc('CWdc53r1tGteYx0tldkE');

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
    (async function NewMessage() {
        try {
            async function addNewMessage() {
                const result = await docRef.set({
                    name: req.body.name,
                    subject: req.body.subject,
                    email: req.body.email,
                    message: req.body.message
                });
                console.log('Enquiry registered');
                res.render(
                    'dashboard', {
                        pageDetails,
                        user
                    }
                );
            }
        } catch (err) {
            console.log(err);
        }
    }());
});


exports.app = functions.https.onRequest(app);