import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
        	<div className="text-center">
            	<h4> REACT PROJECT </h4>
            	<small>THIS SERVES AS</small>
            	<h2>DASHBOARD</h2>
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

export default withRouter(connect(mapStateToProps)(Dashboard));
