var path = require('path');
var friendData = require('../data/friends');

module.export = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    })
    app.post("api/friends", function(req, res){
        if(req.body){ //check to see if you can see how long the body is.
            friendData.push(req.body);
            res.json(true);
            //push modal here do all that coding magic here. 
        }
    })
}