function getUserInfo(username) {
    return fetch('https://api.github.com/users/' + username).then(function(response){
        return response.json();
    });
}
var helpers = {
    getPlayersInfo: function(players) {
        return Promise.all(players.map(function(username){
            return getUserInfo(username)
        })).then(function(info){
            return info;
        }).catch(function(err){
            console.log(err);
        });
    }
};

module.exports = helpers;