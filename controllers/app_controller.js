module.exports.app = function(req,res){
    return res.render ('app',
        {
            title:"PriorityNest"
        }
    );
}