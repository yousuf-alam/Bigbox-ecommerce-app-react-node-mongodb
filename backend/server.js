import express from 'express';
import data from './data.js'

const app = express();

app.get('/api/products',function(req,res){

    res.send(data.products);
});

app.get('/',function(req,res){

res.send("hey sever is on");

});
 
app.listen(3000,function(req,res){

    console.log("yes the server is on 5000");

});