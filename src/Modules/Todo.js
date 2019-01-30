import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

// Functions from Middleware
import {
	getUserid,
	getTitle
	//addTodo,
	//changeUserId,
	//changeTitle,
	//fetchTodos
} from '../Middleware/TodosMiddleware';

// Components
import Card from '../Components/Card';
import ServerSideTable from '../Components/ServerSideTable';

//import classnames from 'classnames';

class Todo extends Component {
	constructor(props){
		super(props);

		this.userid = null;
		this.title = '';

		// KeyUp
		this.handleUseridChange = this.handleUseridChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);

		// FocusOut
		this.getUserid = this.getUserid.bind(this);
		this.getTitle = this.getTitle.bind(this);

		// Submit
		this.handleSubmit = this.handleSubmit.bind(this);

		this.columns = [
            {
    			Header: 'Title',
    		    accessor: 'title'
    	  	},
            {
                Header: 'Completed',
                accessor: 'completed',
                Cell: props => {
                	switch(props.value){
                		case '0':
                			return (
                				<div className='text-center'>
                					<span className='badge badge-pill badge-danger'>Not Completed</span>
                				</div>
                			)
                		case '1':
                			return (
                				<div className='text-center'>
                					<span className='badge badge-pill badge-success'>Completed</span>
                				</div>
                			)
                		default:
                	}
                }
            },
            {
            	Header: 'Actions',
            	accessor: 'id',
            	width: 100,
            	Cell: props => {
            		return (
            			<div className="text-center">
	            			<Link to={'todos/update/' + props.value}>
	            				<i className="fa fa-fw fa-pencil"></i>
	            			</Link>
	            		</div>
            		)
            	}
            }]
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log('Submitted')
		//this.props.addTodo(this.props.userid, this.props.title);
	}

	handleUseridChange(e) {
		e.preventDefault();
		this.userid = e.target.value;
	}

	handleTitleChange(e) {
		e.preventDefault();
		this.title = e.target.value;
	}

	getUserid(e) {
		e.preventDefault();
		this.props.getUserid(this.userid);
	}

	getTitle(e) {
		e.preventDefault();
		this.props.getTitle(this.title);
	}

	render() {

		/*
		const {
			processing,
			disabled,
			validUserid,
			invalidUserid,
			validTitle,
			invalidTitle,
		} = this.props;

		const useridClass = classnames({
							  	'form-group': true,
							  	'has-danger': !isValid_userid && isInvalid_userid,
							  	'has-success': isValid_userid && !isInvalid_userid
							})

		const titleClass = classnames({
								'form-group': true,
							  	'has-danger': !isValid_title && isInvalid_title,
							  	'has-success': isValid_title && !isInvalid_title
							})
		*/

		return (
			<div>
	        	<Card cardTitle="ADD TODO" cardDescription="What to do today?">
	        		<form>
		                <div className="row">
		                	<div className="col-md-6">
		                      	<div className="form-group">
			                        <label>Fake User ID:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={this.handleUseridChange}
			                        	onBlur={this.getUserid}
			                        />
		                      	</div>
		                    </div>
		                    <div className="col-md-6">
		                      	<div className="form-group">
			                        <label>Title:</label>
			                        <input
			                        	type="text"
			                        	className="form-control"
			                        	onChange={this.handleTitleChange}
			                        	onBlur={this.getTitle}
			                        />
		                      	</div>
		                    </div>
		                </div>
		                <div className="row">
		                	<div className="col-md-12">
		                		<div className="form-group">
		                			<button
		                				onClick={this.handleSubmit}
		                				type="button" 
		                				className="btn btn-round btn-block btn-danger btn-fill"
		                			>
		                				Submit
		                			</button>
	                			</div>
		                	</div>
		                </div>
	                </form>
	        	</Card>
	            <Card cardTitle="TODO LIST" cardDescription="Work! Work! Work!">
            	 	<ServerSideTable
	            	 	api={'fetchTodos'}
	                	columns={this.columns}
	                />            		
	            </Card>
	        </div>
		)
	}
}

const mapStateToProps = (state) => {
	const input = state.ui.todos;
	const ui = state.ui;
	const todos = state.todos;
	return {
		/* ui states */

		// post loader
		processing: ui.isPosting,

		// submit button
		disabled: ui.isDisabled,

		// input
		validUserid: 	input.isValidUserid,
		invalidUserid: 	input.isInvalidUserid,
		validTitle: 	input.isValidTitle,
		invalidTitle: 	input.isInvalidTitle,

		// todos
		userid: todos.userid,
		title:  todos.title,
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getUserid,
	getTitle
	//addTodo,
	//changeUserId,
	//changeTitle,
	//fetchTodos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
