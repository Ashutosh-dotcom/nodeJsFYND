const mongo = require("mongodb");
const url = "mongodb://127.0.0.1:27017"; 

const mongoClient = new mongo.MongoClient(url);

mongoClient.connect(function(err,db){
    if(err) throw err;
    else
    console.log("Connection to db has been established");
})

module.exports = mongoClient;