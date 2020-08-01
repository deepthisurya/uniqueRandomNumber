/* ========================================================================= */
/*   Contact Form Validating
/* ========================================================================= */


const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});
const serviceAccount = require('./webprojects-afda2-firebase-adminsdk-4lxi8-e63e4e89ef.json');


// Listen for form submit
document.getElementById('contact-form').addEventListener('contact-submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Show alert
    document.querySelector('.mail-success').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.mail-success').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}