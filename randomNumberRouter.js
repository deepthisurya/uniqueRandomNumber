const express = require('express');
const randomNumberController = require("../controller/randomNumberController");

function routes() {
    const randomNumberRouter = express.Router();
    const controller = randomNumberController();
    randomNumberRouter.route("/oneRandomNumber")
        .get((req, res) => {
            let randomNumber = controller.getOneRandomNumber();
            // console.log(randomNumber);
            res.send({ Number: randomNumber });
        });
    randomNumberRouter.route('/manyRanDomNumbers/:count')
        .get((req, res) => {
            let result = controller.getManyRandomNumbers(req.params.count);
            /*
            1. Generate a unique 13 digit number
            2. check to see if that is already there in db and make a new entry based on that
            3.
            */
            res.send(result);
        });
    return randomNumberRouter;
}

module.exports = routes;