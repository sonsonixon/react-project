import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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
    return {

    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
