// Retrieve
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const url = "mongodb+srv://<username>:<password>@cluster0-ocmyg.mongodb.net/test?retryWrites=true&w=majority\n"


let mongodb;

function connect(){
    MongoClient.connect(url, function(err, client) {
        if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        console.log('Connect function inside database_stocks, Listening...');
        client.close();
})}
function get(){



    MongoClient.connect(url, function(err, client) {
        if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        console.log('Connect function inside database_stocks, Listening...');
        const collection = client.db("tests").collection("devices");
        return collection;


})}

function close(){
    //mongodb.close();
}

module.exports = {
    connect,
    get,
    close
}
