var toDoList =[
    {
        description:" A sample task",
        category : "Work",
        duedate :"26-12-2020"


    }
]

module.exports.app = function(req,res){
    return res.render ('app',
        {
            title:"PriorityNest",
            toDo_App:toDoList

        }
    );
}