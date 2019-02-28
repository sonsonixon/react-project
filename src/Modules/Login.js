import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/forms/Login';

import {
	login,
} from '../redux/middleware/user';

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(values) {
		this.props.login(values);
	}
	
    render() {
        return (
            <div className="col-lg-4 col-md-6 ml-auto mr-auto card-login">
            	<div className="card">
	            	<div className="card-header text-center">
	            		<img src="/assets/img/logo.svg" width="100" alt="Logo" />
	            	</div>
	            	<div className="card-body">
	            		<LoginForm onSubmit={this.handleSubmit} />
	            	</div>
	            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	login,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
