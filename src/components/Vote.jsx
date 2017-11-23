import React from 'react';
import createReactClass from 'create-react-class';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default createReactClass({
    mixins: [PureRenderMixin],
    getPair: function () {
        return this.props.pair || [];
    },
    isDisabled: function() {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function(entry) {
        return this.props.hasVoted === entry;
    },
    render: function() {
        return <div className="voting">
            {this.getPair().map(entry =>
                <button key={entry}
                        disabled={this.isDisabled()}
                        onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                    {this.hasVotedFor(entry) ?
                    <div className="label">Voted</div> :
                    null}
                </button>
            )}
        </div>;
    }
});
