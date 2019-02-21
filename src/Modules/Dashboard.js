import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();

        console.log('state updated')
    }

    render() {
        
        return (
        	<div className="text-center">
            	<h4> REACT PROJECT </h4>
            	<small>THIS SERVES AS</small>
            	<h2>DASHBOARD</h2>
                <button type="button" onClick={this.onClick}>Button</button>
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
