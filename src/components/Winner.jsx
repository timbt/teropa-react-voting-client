import React from 'react';
import createReactClass from 'create-react-class';

export default createReactClass({
    render: function() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>
    }
});