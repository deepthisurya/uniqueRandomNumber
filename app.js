const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

const randomNumberRouter = require("./router/randomNumberRouter")();

app.get('/', (req, res) => {
    res.send('Hi tongadive! Lets generate Random Numbers....');
});

app.use("/api", randomNumberRouter);

app.listen(port, () => {
    console.log(`Running at ${port}`);
});