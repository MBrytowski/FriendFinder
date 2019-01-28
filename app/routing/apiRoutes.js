var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        
        var bestMatch = {
            name: '',
            photo: '',
            friendDifference: Infinity
        };
        
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;

        var newFriendTotalScore = newFriendScores.reduce(function (num1, num2) {
            return parseInt(num1) + parseInt(num2);
        });
        
        var scoreDifference = 0;
        
        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i];
            let currentFriendScores = friendsData[i].scores;

            const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);

            let currentFriendTotal = currentFriendScores.reduce(reducer);

            scoreDifference = Math.abs(newFriendTotalScore - currentFriendTotal);

            if (scoreDifference < bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = scoreDifference;
            };

        };

        friendsData.push(req.body);
        res.json(bestMatch);
    });
};