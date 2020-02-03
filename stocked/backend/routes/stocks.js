var express = require('express');
var router = express.Router();

// Retrieve
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const url = "mongodb+srv://philip7zachary:Mlp123Mlp123@cluster0-ocmyg.mongodb.net/test?retryWrites=true&w=majority\n"

const db = require('./database_stocks');

router.get('/test', (req, res) => {
    res.json('htestn ');
});

router.get('/hello', (req, res) => {
    res.json('hello worldd from /hello in ');
});




/* GET users listing. */
router.get('/getdata', (req, res) => {

    MongoClient.connect(url, function(err, client) {
        if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        const collection = client.db("data").collection("stocks");

      //  res.json('hello world');

        collection.find({}, {
            projection: {
               _id: 0//, "ARVN.Open": 1
            }}).toArray(function(err, result){
            if (err) throw err;
            //res.json({ name: 'tobi' });
            res.send(result);
            //console.log(result);
           console.log(result[0].ARVN.Open)
            //db.close();
        });
    });

});






module.exports = router;
