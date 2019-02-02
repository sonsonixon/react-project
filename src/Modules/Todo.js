import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

// Components
import Card from '../Components/Card';
import ServerSideTable from '../Components/ServerSideTable';

// Forms
import AddTodoForm from '../Components/Forms/AddTodoForm';

import {
	addTodo
} from '../Middleware/TodosMiddleware';

class Todo extends Component {
	constructor(props){
		super(props);

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

	handleSubmit(values) {
		this.props.addTodo('addTodo', values, 'addTodo');
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
	        		<AddTodoForm 
	        			onSubmit={this.handleSubmit}
	        		/>
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
	return {
		// states
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addTodo,
	//changeUserId,
	//changeTitle,
	//fetchTodos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
