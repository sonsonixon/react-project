import React, { Component } from 'react';
// redux
import { connect } 			  from "react-redux";
import { bindActionCreators } from 'redux'
// components
import Card from '../../components/Card';
// form
import CreateUserForm from '../../components/forms/CreateUser';

import {
	createUser
} from '../../redux/middleware/users';

class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		this.props.createUser('createUser', values);
	}
	
	render() {
		return (
			<div>
				<Card cardTitle="CREATE USER" cardDescription="Create New User">
					<CreateUserForm onSubmit={this.handleSubmit} />
				</Card>
			</div>
		)
	}	
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	createUser,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);