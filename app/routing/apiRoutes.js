var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        //who is the best match, var best match as an object (name, photo, difference) - starts empty
        // var bestMatch = {
        //     name: '',
        //     photo: '',
        //     friendDifference: Infinity
        // };
        // //set var to work with data
        var newFriend = req.body;
        // var newFriendScores = newFriend.scores;
        // var scoreDifference = 0;
        // //loop through friends and loop through scores (multi loops)
        // for (var i = 0; i < friendsData.length; i++) {
        //     var currentFriend = friendsData[i];
        //     let currentFriendScores = friendsData[i].scores
        //     // bestMatch.push(currentFriend);
        //     for (var j = 0; j < currentFriend.scores.length; j++) {
        //         const reducer = (accumulator, currentValue) => accumulator + currentValue;

        //         let newFriendTotal = newFriendScores.reduce(reducer);
        //         console.log("New Friend Total: " + newFriendTotal);

        //         let currentFriendTotal = currentFriendScores.reduce(reducer);
        //         console.log("Current Friend Total: " + currentFriendTotal);
                
        //         scoreDifference = Math.abs(newFriendTotal - currentFriendTotal);
        //         if (scoreDifference < bestMatch.friendDifference) {
        //             bestMatch.push(currentFriend);
        //         } else {
        //             return bestMatch;
        //         }
        //     }
        // }
        // console.log("Best Match: ", bestMatch);

        //define var outside loop = difference in scores - change value of difference var

        //inner loop checks between current friend scores and new friend scores
        //
        friendsData.push(req.body);
        return res.json(newFriend);
    });
};