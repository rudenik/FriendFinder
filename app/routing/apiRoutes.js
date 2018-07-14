var path = require('path');
var parser = require('body-parser');
var friendData = require('../data/friends.js');
var runningTotal;

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
              //add this(sumDiff) to the current friend, JSON object as it's own key
              //see who has the smallest difference
        }
        console.log("friendDiff Array: " + friendArray);
        // Array.min = function( array ){
        //     return Math.min.apply( Math, array );
        // };
        
        // var value = friendArray.min;
        // var key = friendArray.indexOf(value);
        // console.log("Value: " + value + " key: " + key);
        // friendData.push(friendToCompare);
    })
}