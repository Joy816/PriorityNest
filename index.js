const express = require ('express');
const port = 8000;

const app = express();

var toDoList =[
    {
        description:" A sample task",
        category : "Work",
        duedate :"26-12-2020"


    }
]

// creating static middleware called asset( for accessing css and js files )
app.use(express.static('assets'));

//middleware for POST request
app.use(express.urlencoded());


// use express router
app.use('/', require('./routes'));


//setting up ejs as view engine 
app.set('view engine', 'ejs');
app.set('views','./views');



app.listen(port , function (err){

    if (err){
        return console.log (`There is an Error while running the server and the error is :${err}`);
    }

    return console.log (`The server is up and Running on port ::${port}`);

});