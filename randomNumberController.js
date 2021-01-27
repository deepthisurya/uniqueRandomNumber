const mongoose = require('mongoose');
const repo = require('../repo/randomNumberRepo');
const fs = require('fs');
const randomNumberRepo = require('../repo/randomNumberRepo');



function randomNumberController() {

    function getOneRandomNumber() {
        let randomNumber = get13digitNumber();
        return randomNumber;
    }

    function get13digitNumber() {
        return Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12));
    }

    function getManyRandomNumbers(countForRandomNumber) {
        //console.log(countForRandomNumber);

        for (let index = 0; index < countForRandomNumber;) {
            // generate a random number
            let number = get13digitNumber();
            //check if this number exists in the database
            let result = randomNumberRepo.find(number);
            if (!result) {
                // if the number doesnt already exist add to db else generate next number
                randomNumberRepo.add(number);
                console.log(countForRandomNumber, index);
                index++;
            } else {
                return;
            }
        }
        // Now fetch all the random numbers and present to user as JSON
        let fullSet = randomNumberRepo.getAllUniqueRandomNumbers();

        return fullSet;
    }
    // The random numbers are generated and saved on a text file on server
    function generateNRandomNumbers(N) {
        let randomNumSet = new Set();
        for (let i = 0; i < N; i++) {
            let random = get13digitNumber();
            // To make sure that the number is unique and it is 13 digits
            if (!randomNumSet.has(random)) {
                //console.log(randomNum, random);
                randomNumSet.add(random);
            } else {
                return;
            }
        }
        console.log(randomNumSet);
        for (let item of randomNumSet) {
            fs.appendFile('randomNumbers.txt', item + ",", function(err) {
                if (err) return console.log(err);
                //console.log('Data generated!!!');
            });
        }
    }

    return { getOneRandomNumber, getManyRandomNumbers, generateNRandomNumbers };
}

module.exports = randomNumberController;