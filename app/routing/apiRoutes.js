var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        //who is the best match, var best match as an object (name, photo, difference) - starts empty
        //set var to work with data
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;
        //loop through friends and loop through scores (multi loops)
        var difference = 0;
        //define var outside loop = difference in scores - change value of difference var
        var currentFriend = friends[i];
        //inner loop checks between current friend scores and new friend scores
        //
        friendsData.push(req.body);
        res.json(bestMatch);
    });
};