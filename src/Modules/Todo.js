import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';
import ServerSideTable from '../components/ServerSideTable';

// Forms
import AddTodoForm from '../components/forms/AddTodo';

import {
	addTodo
} from '../redux/middleware/todos';



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
        this.props.addTodo('addTodo', values);
	}

	render() {
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
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
