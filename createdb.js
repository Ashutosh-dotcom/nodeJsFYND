const mongo = require('mongodb'); 

const url = "mongodb://127.0.0.1:27017"; 

const client = new mongo.MongoClient(url) 

async function showCollections(){
    
    try { 
    await client.connect();       
    const comments =  client.db("employee").collection("comments");    
    const document = comments.find({});   
    await document.forEach((record)=>{   
    console.log(record);
   });
    } catch (e) {
        console.log(e);
    }
    finally{ 
        await client.close();  //closing the connection
    }
   

}
showCollections();