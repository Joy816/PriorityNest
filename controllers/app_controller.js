// var toDoList =[
//     {
//         description:" A sample task",
//         category : "Work",
//         duedate :"26-12-2020"


//     }
// ]

//fetching modelschema
const Todo = require ('../models/todo');



module.exports.app = function(req,res){
  

    Todo.find ({}, function ( err , toDoList){
    
            
            if (err){
                console.log ( "Error in fetching contactList fron DB");
                return ;
            }
    
            return res.render('app' , {
    
                title:"PriorityNest",
                toDo_App : toDoList
        
             });
        });
    
       
    
         
    }


    module.exports.priorityNest =function ( req , res){



        Todo.create ({
            description : req.body.description,
            category : req.body.category,
            duedate : req.body.duedate

    
        } , function (err , newtask){
            if (err){
                console.log ('error is ', err);
                return ;
            }
    
            console.log ( '********************', newtask);
            return res.redirect('back');
        });
    
    
        
    
    }

