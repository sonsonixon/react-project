import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        if(this.props.url === null) {
            console.log('url is: empty');
        }
        else{
            console.log(this.props.url);
        }
    }

    render() {
        return (
        	<div className="text-center">
            	<h4> REACT PROJECT </h4>
            	<small>THIS SERVES AS</small>
            	<h2>DASHBOARD</h2>
            	<p>Props: {this.props.value}</p>
                <button 
                    type="button"
                    onClick={this.onClick}
                >
                    Show State
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const ui = state.ui;
    return {
        form: ui.form,
        url: ui.url
    }
}

export default connect(mapStateToProps)(Dashboard);
