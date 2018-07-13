var path = require('path');
var parser = require('body-parser');
var friendData = require('../data/friends');

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    })
    app.post("/api/friends", function(req, res){
        console.log("here's the body: " + JSON.stringify(req.body));
        // res.redirect("/survey");

        // $('#exampleModal').on('shown.bs.modal', function () {
        //     // $('#myInput').trigger('focus')
        //     $('#exampleModalLabel').html("Hey " + JSON.stringify(req.body.namefield)).trigger('focus');
        //     $('#exampleModal').modal('show') ;

        //   })
        // if(req.body){ //check to see if you can see how long the body is.
        //     friendData.push(req.body);
        //     res.json(true);
            //push modal here do all that coding magic here. 
        // }
    })
}