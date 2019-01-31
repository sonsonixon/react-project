import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class AddTodoForm extends Component {
    render() {
    	const { handleSubmit, pristine, isPosting } = this.props;
        return (
        	<form onSubmit={ handleSubmit }>
	        	<div className="row">
	        		<div className="col-md-6">
	        			<div className="form-group">
		            		<label>User ID:</label>
		            		<Field name="userid" component="input" type="text" className="form-control" />
		        		</div>
		        	</div>
		        	<div className="col-md-6">
	        			<div className="form-group">
		            		<label>Title:</label>
		            		<Field 
		            			name="title" 
		            			component="input" 
		            			type="text" 
		            			className="form-control"
		            		 />
		        		</div>
		        	</div>
	            </div>
	            <div className="row">
	            	<div className="col-md-12">
	            		<div className="form-group">
		        			<button 
		        				type="submit"
		        				className="btn btn-block btn-round btn-fill btn-danger" 
		        				disabled={ pristine || isPosting }
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
	const ui = state.ui;
	return {
		isPosting: ui.isPosting
	}
}

AddTodoForm = reduxForm({
	form: 'addTodo'
})(AddTodoForm);

export default connect(mapStateToProps)(AddTodoForm)
