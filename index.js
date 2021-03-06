const express = require ('express');
const port = 8000;

const app = express();

//configuring mongoose |( mongoose is object data modelling for mongodb and node.js)
const db = require('./config/mongoose');

//fetching modelschema
const Todo = require ('./models/todo');



// creating static middleware called asset( for accessing css and js files )
app.use(express.static('assets'));




// use express router
app.use('/', require('./routes'));


//setting up ejs as view engine 
app.set('view engine', 'ejs');
app.set('views','./views');


//deleting entries 

app.get('/delete-task' , function (req,res){

    let id = req.query.id;

    Todo.findByIdAndDelete( id , function (err ){
        if (err){
            console.log (err);
            return ;
        }

        return res.redirect('/app');  
    });
   
})



app.listen(port , function (err){

    if (err){
        return console.log (`There is an Error while running the server and the error is :${err}`);
    }

    return console.log (`The server is up and Running on port ::${port}`);

});