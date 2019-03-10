import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Field, reduxForm } from 'redux-form';

import { 
	hasSuccessUserid,
	isValidUserid,
	clearUserid,
	hasSuccessTitle,
	isValidTitle,
	clearTitle,
} from '../../Redux/ActionCreators/TodosActions';

import classnames from 'classnames';

import {
    handleSetForm,
    handleFormDestroy,
} from '../../Redux/Middlewares/UiMiddleware';

class AddTodoForm extends Component {
	constructor(props) {
		super(props);

		this.OnBlurUserid = this.OnBlurUserid.bind(this);
		this.OnBlurTitle = this.OnBlurTitle.bind(this);
	}

	componentDidMount() {
		// save the form name on page render
		this.props.handleSetForm('addTodo');
	}

	componentWillUnmount() {
		this.props.handleFormDestroy();
	}

	OnBlurUserid(e) {
		let text = e.target.value;
		if(text) {
			this.props.hasSuccessUserid();
			this.props.isValidUserid();			
		} else {
			this.props.clearUserid();
		}
	}

	OnBlurTitle(e) {
		let text = e.target.value;
		if(text) {
			this.props.hasSuccessTitle();
			this.props.isValidTitle();
		} else {
			this.props.clearTitle();
		}
	}

    render() {
    	const { 
    		handleSubmit, isPosting,
    		// userid
			useridSuccess, 
			useridError,
			useridIsValid,
			useridErrorMessage,
			// title
			titleSuccess,
			titleError,
			titleIsValid,
			titleErrorMessage,
    	} = this.props;

    	const useridClass = classnames({
		  	'form-group': true,
		  	'has-danger': !useridSuccess && useridError,
		  	'has-success': useridSuccess && !useridError
		})

		const titleClass = classnames({
			'form-group': true,
		  	'has-danger': !titleSuccess && titleError,
		  	'has-success': titleSuccess && !titleError
		})

        return (
        	<form onSubmit={ handleSubmit }>
        		<div className="row">
					<div className="col-md-6">
		    			<div className={useridClass}>
		            		<label>USER ID</label>
		            		<Field 
		            			name="userid" 
		            			component="input"
		            			type="text"
		            			className="form-control"
		            			onBlur={this.OnBlurUserid}
		            		/>
		        		</div>
		        		<p className="text-danger">
		        			<strong>
		        				{useridErrorMessage}
		        			</strong>
		        		</p>
		        	</div>
		        	<div className="col-md-6">
		    			<div className={titleClass}>
		            		<label>TITLE</label>
		            		<Field 
		            			name="title" 
		            			component="input" 
		            			type="text" 
		            			className="form-control"
		            			onBlur={this.OnBlurTitle}
	            			/>
		        		</div>
		        		<p className="text-danger">
		        			<strong>
		        				{titleErrorMessage}
		        			</strong>
		        		</p>
	        		</div>
	            </div>
	            <div className="row">
	            	<div className="col-md-12">
	            		<div className="form-group">
		        			<button 
		        				type="submit"
		        				className="btn btn-block btn-round btn-fill btn-danger" 
		        				disabled={ !useridIsValid || !titleIsValid || isPosting }
		        			>
		        				{(isPosting) ? <i className="fa fa-fw fa-spin fa-spinner"></i> : 'Submit'}
		        			</button>
		        		</div>
	            	</div>
	            </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
	const ui     = state.ui;
	const userid = state.todos.userid;
	const title  = state.todos.title;

	return {
		// [todos] userid
		useridSuccess  : userid.hasSuccess,
		useridError    : userid.hasError,
		useridIsValid  : userid.valid,
		useridErrorMessage    : userid.error,

		// [todos] title
		titleSuccess   : title.hasSuccess,
		titleError     : title.hasError,
		titleIsValid   : title.valid,
		titleErrorMessage     : title.error,

		// [ui] post loader
		isPosting     : ui.isPosting,
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	// todos
	// userid
	hasSuccessUserid,
	isValidUserid,
	clearUserid,

	// title
	hasSuccessTitle,
	isValidTitle,
	clearTitle,

	// form
	handleSetForm,
    handleFormDestroy,
}, dispatch)

AddTodoForm = reduxForm({
	form: 'addTodo'
})(AddTodoForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
