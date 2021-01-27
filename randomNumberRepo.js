const { MongoClient } = require('mongodb');
const randomNumber = require('../repo/randomNumberRepo');
const data = require("../randomNumbers.json");


//revealing module pattern

function randomNumberRepo() {

    const url = 'mongodb://localhost:27017';
    const dbName = 'uniqueRandomNumbers';


    function add(number) {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);
                const addedItem = await db.collection('randomNumbers').insertOne(number);
                console.log(addedItem);
                resolve(addedItem.ops[0]);
                client.close();
            } catch (e) {
                reject(e);
            }
        });
    }

    function getAllUniqueRandomNumbers() {
        return "All data fetched!!!";
    }

    function find(number) {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);
                const duplicate = await db.collection('randomNumbers').find({ "number": number });
                console.log(duplicate);
                resolve(duplicate);
                client.close();
            } catch (e) {
                reject(e);
            }
        });
    }
    return { add, find, getAllUniqueRandomNumbers };
}

module.exports = randomNumberRepo();