const express = require('express');
const mongoose = require('mongoose');
const path= require('path');
const app = express();
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}));
const port=5500;
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/public/hotel.html');
})

console.log(__dirname+ '/public/hotel.html');

mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('mongo is connected');
})

const Schema= mongoose.Schema;
const dataschema = new Schema({
    name:String,
    email:String,
    subject:String,
    number:String,
    message:String,
    checkin:String,
    checkout:String,
    guests:String,
    rooomtype:String
});

const Data = mongoose.model('Data',dataschema);

app.post('/submit',(req,res)=>{
    const{name,email,subject,number,message,checkin,checkout,guests,roomtype,}=req.body;
    const newData =new Data({
        name,email,subject,number,message,checkin,checkout,guests,roomtype,
    });
    newData.save();
    res.redirect('/');
})


app.listen(port,()=>{
    console.log('server is running at port$(port)');
})

