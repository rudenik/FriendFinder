var path = require('path');
var parser = require('body-parser');
var friendData = require('../data/friends.js');


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    })
    app.post("/api/friends", function(req, res){
        console.log("here's the body: " + JSON.stringify(req.body));
        // console.log("friend data: " +JSON.stringify(friendData.friends));
        var friendToCompare = req.body;
        var friendArray = [];
        for(friends in friendData.friends){
            var diff = friendToCompare.score.map(function (num, idx) {
                // console.log(friendData.friends[friends[idx]])
                return Math.abs(num - friendData.friends[friends].score[idx]);
              });
              console.log("whats the difference: " + diff);
              var sumDiff = diff.reduce(function(sum, num){
                  return sum + num;
              });
              console.log("someDIfference: " + sumDiff);
              friendArray.push(sumDiff);
        }
        console.log("friendDiff Array: " + friendArray);
        var idx=friendArray.indexOf(Math.min.apply(null,friendArray))
        console.log("indx: " + idx);
        res.json(friendData.friends[idx]);
        // Array.min = function( array ){
        //     return Math.min.apply( Math, array );
        // };
        
        // var value = friendArray.min;
        // var key = friendArray.indexOf(value);
        // console.log("Value: " + value + " key: " + key);
        // friendData.push(friendToCompare);
    })
}