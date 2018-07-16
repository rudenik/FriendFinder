var path = require('path');
var parser = require('body-parser');
var friendData = require('../data/friends.js');


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    })
    app.post("/api/friends", function (req, res) {

        console.log("here's the body: " + JSON.stringify(req.body));
        var friendToCompare = req.body;
        var friendArray = [];
        for (friends in friendData) {
            var diff = friendToCompare.score.map(function (num, idx) {
                return Math.abs(num - friendData[friends].score[idx]);
            });
            console.log("whats the difference: " + diff);
            var sumDiff = diff.reduce(function (sum, num) {
                return sum + num;
            });
            console.log("someDIfference: " + sumDiff);
            friendArray.push(sumDiff);
        }
        console.log("friendDiff Array: " + friendArray);
        var idx = friendArray.indexOf(Math.min.apply(null, friendArray))
        console.log("indx: " + idx);
        res.json(friendData[idx]);
        friendData.push(friendToCompare);
    })
}