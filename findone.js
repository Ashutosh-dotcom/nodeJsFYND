const MongoClient =require('mongodb').MongoClient
const url = "mongodb://127.0.0.1:27017"; 
MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var dbo =db.db("employee");
    dbo.collection("comments").findOne({}, function(err,result) {
        if (err) throw err;
        console.log(result.name);
        if(result.name=="Ashutosh kumar"){
            console.log("I am Ashutosh")
        }
        db.close();
    });
});