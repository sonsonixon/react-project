import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field, reduxForm } from 'redux-form';

// Actions
import {
	isValidUSERNAME,
	isValidPASSWORD,
	isInvalidUSERNAME,
	isInvalidPASSWORD,
} from '../../redux/actions/login';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.handleOnBlurUSERNAME = this.handleOnBlurUSERNAME.bind(this);
		this.handleOnBlurPASSWORD = this.handleOnBlurPASSWORD.bind(this);
	}

	handleOnBlurUSERNAME(e) {
		let username = e.target.value;
		if(username) {
			this.props.isValidUSERNAME();
		} else {
			this.props.isInvalidUSERNAME();
		}
	}

	handleOnBlurPASSWORD(e) {
		let password = e.target.value;
		if(password) {
			this.props.isValidPASSWORD();
		} else {
			this.props.isInvalidPASSWORD();
		}
	}

	render() {

		const { 
			handleSubmit, isLoggingIn,
			validUSERNAME,
			validPASSWORD,
		} = this.props;

		return (
			<form onSubmit={ handleSubmit }>
				<div className="input-group">
					<div className="input-group-prepend">
					  	<span className="input-group-text">
					    	<i className="nc-icon nc-single-02"></i>
					  	</span>
					</div>
					<Field
						name="username"
						component="input" 
						type="text"
						className="form-control" 
						placeholder="Username..." 
						onBlur={this.handleOnBlurUSERNAME}
					/>
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
					  	<span className="input-group-text">
					    	<i className="nc-icon nc-key-25"></i>
					  	</span>
					</div>
					<Field
						name="password"
						component="input"
						type="password" 
						className="form-control"
						placeholder="Password..." 
						onBlur={this.handleOnBlurPASSWORD}
					/>
				</div>
				<div className="form-group pt-3">
                    <div className="form-check">
                      	<label className="form-check-label">
	                        <Field 
	                        	name="rememberPassword"
	                        	component="input"
	                        	type="checkbox"
	                        	className="form-check-input" 
	                        />
	                        <span className="form-check-sign"></span>
	                        Remember password
                      	</label>
                    </div>
              	</div>
				<div className="form-group pt-3">
					<button 
						type="submit" 
						className="btn btn-danger btn-round btn-block mb-3"
						disabled={ !validUSERNAME || !validPASSWORD || isLoggingIn }
					>
						{isLoggingIn ? <i className="fa fa-fw fa-spin fa-spinner"></i> : 'Login'}
					</button>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	const username = state.login.username;
	const password = state.login.password;
	const login = state.login;

	return {
		isLoggingIn: login.isLoggingIn,
		validUSERNAME: username.isValid,
		validPASSWORD: password.isValid,
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	isValidUSERNAME,
	isValidPASSWORD,
	isInvalidUSERNAME,
	isInvalidPASSWORD,
}, dispatch)

LoginForm = reduxForm({
	form: 'login'
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)