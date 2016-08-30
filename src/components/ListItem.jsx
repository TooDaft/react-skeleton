var React = require('react');
var ListItem = React.createClass({
    render: function(){
     //returning an HTML item, this.props is a passed down property being ingredients
        return(
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        );
    }
});

module.exports = ListItem;
