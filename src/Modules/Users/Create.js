import React, { Component } from 'react';
// redux
import { connect } 			  from "react-redux";
import { bindActionCreators } from 'redux'
// Components
import Card from '../../Components/Card';
// form
import CreateUserForm from '../../Components/Forms/Users/CreateUserForm';

import {
	createUser
} from '../../Redux/Middlewares/UsersMiddleware';

class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		const { createUser } = this.props;
		createUser(values);
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