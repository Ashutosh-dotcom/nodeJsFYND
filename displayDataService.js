const express = require('express');
var app = express();
var document = require('./fetchRecordService');

app.get('/users',async function(req,res){
    const docs = await document();
    res.send(docs);
})


app.listen(8000);