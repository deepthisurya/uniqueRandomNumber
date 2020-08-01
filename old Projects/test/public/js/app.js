// Get a reference to the database service
var database = firebase.database();
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7AXMAc6RxrBV2MY84IoXfFX9yHyRH3ys",
    authDomain: "webprojects-afda2.firebaseapp.com",
    databaseURL: "https://webprojects-afda2.firebaseio.com",
    projectId: "webprojects-afda2",
    storageBucket: "webprojects-afda2.appspot.com",
    messagingSenderId: "991786156454",
    appId: "1:991786156454:web:23d66c3dff65810d480f67",
    measurementId: "G-Y0138Y3E82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const db = firestore.collection('messages');

db.doc()
    .set({
        name: name,
        subject: subject,
        email: email,
        message: message
    })
    .then(function() {
        console.log('Data saved');
    })
    .catch(function(error) {
        console.log(error);
    })