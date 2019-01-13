import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
        	<div className="text-center">
            	<h4> REACT PROJECT </h4>
            	<small>THIS SERVES AS</small>
            	<h2>DASHBOARD</h2>
            	<p>Props: {this.props.value}</p>
            </div>
        );
    }
}

export default Dashboard;
