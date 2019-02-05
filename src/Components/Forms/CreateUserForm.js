import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux form
import { Field, reduxForm } from 'redux-form';

import classnames from 'classnames';

import {
	// first name
	hasSuccessFIRSTNAME,
	clearFIRSTNAME,
	// middle name
	hasSuccessMIDDLENAME,
	clearMIDDLENAME,
	// last name
	hasSuccessLASTNAME,
	clearLASTNAME,
	// username
	hasSuccessUSERNAME,
	clearUSERNAME,
	// password
	hasSuccessPASSWORD,
	clearPASSWORD,
	// status
	hasSuccessSTATUS,
	clearSTATUS,
} from '../../Actions/UserActions';

class CreateUserForm extends Component {
	constructor(props) {
		super(props);

		this.handleOnBlurFIRSTNAME 	= this.handleOnBlurFIRSTNAME.bind(this);
		this.handleOnBlurMIDDLENAME = this.handleOnBlurMIDDLENAME.bind(this);
		this.handleOnBlurLASTNAME 	= this.handleOnBlurLASTNAME.bind(this);
		this.handleOnBlurUSERNAME 	= this.handleOnBlurUSERNAME.bind(this);
		this.handleOnBlurPASSWORD 	= this.handleOnBlurPASSWORD.bind(this);
		this.handleOnBlurSTATUS 	= this.handleOnBlurSTATUS.bind(this);
	}

	handleOnBlurFIRSTNAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessFIRSTNAME();
		} else {
			this.props.clearFIRSTNAME();
		}
	}

	handleOnBlurMIDDLENAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessMIDDLENAME();
		} else {
			this.props.clearMIDDLENAME();
		}
	}

	handleOnBlurLASTNAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessLASTNAME();
		} else {
			this.props.clearLASTNAME();
		}
	}

	handleOnBlurUSERNAME(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessUSERNAME();
		} else {
			this.props.clearUSERNAME();
		}
	}

	handleOnBlurPASSWORD(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessPASSWORD();
		} else {
			this.props.clearPASSWORD();
		}
	}

	handleOnBlurSTATUS(e) {
		let value = e.target.value;
		if(value) {
			this.props.hasSuccessSTATUS();
		} else {
			this.props.clearSTATUS();
		}
	}

	render() {
		const { 
			handleSubmit, isPosting,
			// first name
			errorFIRSTNAME,
			successFIRSTNAME,
			validFIRSTNAME,
			errorMessageFIRSTNAME,
			// middle name
			errorMIDDLENAME,
			successMIDDLENAME,
			validMIDDLENAME,
			errorMessageMIDDLENAME,
			// last name
			errorLASTNAME,
			successLASTNAME,
			validLASTNAME,
			errorMessageLASTNAME,
			// username
			errorUSERNAME,
			successUSERNAME,
			validUSERNAME,
			errorMessageUSERNAME,
			// passwordname
			errorPASSWORD,
			successPASSWORD,
			validPASSWORD,
			errorMessagePASSWORD,
			// status
			errorSTATUS,
			successSTATUS,
			validSTATUS,
			errorMessageSTATUS,

		} = this.props

		const firstnameClass = classnames({
			'form-group' : true,
			'has-danger' : !successFIRSTNAME && errorFIRSTNAME,
			'has-success': successFIRSTNAME && !errorFIRSTNAME,
		})

		const middlenameClass = classnames({
			'form-group' : true,
			'has-danger' : !successMIDDLENAME && errorMIDDLENAME,
			'has-success': successMIDDLENAME && !errorMIDDLENAME,
		})

		const lastnameClass = classnames({
			'form-group' : true,
			'has-danger' : !successLASTNAME && errorLASTNAME,
			'has-success': successLASTNAME && !errorLASTNAME,
		})

		const usernameClass = classnames({
			'form-group' : true,
			'has-danger' : !successUSERNAME && errorUSERNAME,
			'has-success': successUSERNAME && !errorUSERNAME,
		})

		const passwordClass = classnames({
			'form-group' : true,
			'has-danger' : !successPASSWORD && errorPASSWORD,
			'has-success': successPASSWORD && !errorPASSWORD,
		})

		const statusClass = classnames({
			'form-group' : true,
			'has-danger' : !successSTATUS && errorSTATUS,
			'has-success': successSTATUS  && !errorSTATUS,
		})

		return (
			<form onSubmit={ handleSubmit }>
                <div className="row">
                	<div className="col-md-4">
                      	<div className={firstnameClass}>
	                        <label>FIRST NAME</label>
	                        <Field
	                        	name="first_name"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurFIRSTNAME}
	                        />
                      	</div>
                      	<p className="text-danger"><strong>{errorMessageFIRSTNAME}</strong></p>
                    </div>
                    <div className="col-md-4">
                      	<div className={middlenameClass}>
	                        <label>MIDDLE NAME</label>
	                        <Field
	                        	name="middle_name"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurMIDDLENAME}
	                        />
                      	</div>
                      	<p className="text-danger"><strong>{errorMessageMIDDLENAME}</strong></p>
                    </div>
                    <div className="col-md-4">
                      	<div className={lastnameClass}>
	                        <label>LAST NAME</label>
	                        <Field
	                        	name="last_name"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurLASTNAME}
	                        />
                      	</div>
                      	<p className="text-danger"><strong>{errorMessageLASTNAME}</strong></p>
                    </div>
                </div>
                <div className="row">
                	<div className="col-md-6">
                      	<div className={usernameClass}>
	                        <label>USERNAME</label>
	                        <Field
	                        	name="username"
	                        	component="input"
	                        	type="text"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurUSERNAME}
	                        />
                      	</div>
                      	<p className="text-danger"><strong>{errorMessageUSERNAME}</strong></p>
                    </div>
                    <div className="col-md-6">
                      	<div className={passwordClass}>
	                        <label>PASSWORD</label>
	                        <Field
	                        	name="password"
	                        	component="input"
	                        	type="password"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurPASSWORD}
	                        />
                      	</div>
                      	<p className="text-danger"><strong>{errorMessagePASSWORD}</strong></p>
                    </div>
                </div>
                <div className="row">
                	<div className="col-md-4">
                      	<div className={statusClass}>
	                        <label>ACCOUNT STATUS</label>
	                        <Field
	                        	name="status"
	                        	component="select"
	                        	type="password"
	                        	className="form-control"
	                        	onBlur={this.handleOnBlurSTATUS}
	                        >
	                        		<option value="">Select Status</option>
								  	<option value="active">Active</option>
								  	<option value="inactive">Inactive</option>
	                        </Field>
                      	</div>
                      	<p className="text-danger"><strong>{errorMessageSTATUS}</strong></p>
                    </div>
                    <div className="col-md-4">
                      	<div className="form-group">
	                        <label>ROLE</label>
	                        <Field
	                        	name="role"
	                        	component="select"
	                        	type="password"
	                        	className="form-control"
	                        >
	                        		<option value="">Select Role</option>
	                        		<option value="admin">Admin</option>
								  	<option value="user">User</option>								  	
	                        </Field>
                      	</div>
                    </div>
                </div>
                <div className="row">
                	<div className="col-md-12">
                		<div className="form-group mt-5">
                			<hr />
                			<button 
                				type="submit"
                				className="btn btn-round btn-block btn-danger btn-fill"
                				disabled={  
                					!validFIRSTNAME  || 
                					!validMIDDLENAME ||
                					!validLASTNAME   ||
                					!validUSERNAME 	 ||
                					!validPASSWORD 	 ||
                					!validSTATUS 	 ||
                					isPosting 
                				}
                			>
                			{isPosting ? <i className="fa fa-fw fa-spinner fa-spin"></i> : 'Submit'}
                			</button>
            			</div>
                	</div>
                </div>
            </form>
		);
	}
}

const mapStateToProps = (state) => {
	const ui = state.ui;
	const firstname  = state.users.firstname;
	const middlename = state.users.middlename;
	const lastname   = state.users.lastname;
	const username   = state.users.username;
	const password   = state.users.password;
	const status 	 = state.users.status;
	return {
		// first name
		errorFIRSTNAME  	 : firstname.hasError,
		successFIRSTNAME 	 : firstname.hasSuccess,
		validFIRSTNAME  	 : firstname.isValid,
		errorMessageFIRSTNAME: firstname.errorMessage,
		// middle name
		errorMIDDLENAME  	  : middlename.hasError,
		successMIDDLENAME 	  : middlename.hasSuccess,
		validMIDDLENAME  	  : middlename.isValid,
		errorMessageMIDDLENAME: middlename.errorMessage,
		// last name
		errorLASTNAME  	 	: lastname.hasError,
		successLASTNAME 	: lastname.hasSuccess,
		validLASTNAME  	 	: lastname.isValid,
		errorMessageLASTNAME: lastname.errorMessage,
		// username
		errorUSERNAME  	 	: username.hasError,
		successUSERNAME 	: username.hasSuccess,
		validUSERNAME  	 	: username.isValid,
		errorMessageUSERNAME: username.errorMessage,
		// password
		errorPASSWORD  	 	: password.hasError,
		successPASSWORD 	: password.hasSuccess,
		validPASSWORD  	 	: password.isValid,
		errorMessagePASSWORD: password.errorMessage,
		// status
		errorSTATUS  	  : status.hasError,
		successSTATUS 	  : status.hasSuccess,
		validSTATUS  	  : status.isValid,
		errorMessageSTATUS: status.errorMessage,

		// loader
		isPosting : ui.isPosting,
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	// first name
	hasSuccessFIRSTNAME,
	clearFIRSTNAME,
	// middle name
	hasSuccessMIDDLENAME,
	clearMIDDLENAME,
	// last name
	hasSuccessLASTNAME,
	clearLASTNAME,
	// username
	hasSuccessUSERNAME,
	clearUSERNAME,
	// password
	hasSuccessPASSWORD,
	clearPASSWORD,
	// status
	hasSuccessSTATUS,
	clearSTATUS,
}, dispatch)

CreateUserForm = reduxForm({
	form: 'createUser'
})(CreateUserForm);

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm)