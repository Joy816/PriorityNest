const express = require ('express');
const port = 8000;

const app = express();




app.listen(port , function (err){

    if (err){
        return console.log (`There is an Error while running the server and the error is :${err}`);
    }

    return console.log (`The server is up and Running on port ::${port}`);

});