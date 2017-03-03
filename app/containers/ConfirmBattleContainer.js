var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');
var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        }
    },

    componentDidMount: function() {
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(resp){
                this.setState({
                    isLoading: false,
                    playersInfo: [resp[0], resp[1]]
                });
            }.bind(this));
    },
    
    render(){
        return (
            <ConfirmBattle 
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
            />
        );
    }
});

module.exports = ConfirmBattleContainer;