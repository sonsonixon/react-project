import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// react router
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {

	render() {
		const { layout: Layout, component: Component, isAuthenticated, ...rest } = this.props;
		console.log(isAuthenticated);
		return (
			<Route {...rest} render={(props) => (
				isAuthenticated ? ( 
					<Layout>
			            <Component />
			        </Layout>
			    ) : (
			    	<Redirect to="/login" />
			    )
		    )}/>
		)
	}

}

/*const PrivateRoute = ({ component: Component, layout: Layout, isAuthenticated, ...rest }) => {
	console.log(isAuthenticated)
	return (
		<Route {...rest} render={(props) => (
			isAuthenticated ? (
		        <Layout>
		            <Component {...props} />
		        </Layout>
	        ) : (
	        	<Redirect to="/login" />
	        )
		)}/>
	)
}
*/
const mapStateToProps = (state) => {
	const login = state.login;
	return {
		isAuthenticated: login.isAuthenticated,
	}
}

export default connect(mapStateToProps)(PrivateRoute);