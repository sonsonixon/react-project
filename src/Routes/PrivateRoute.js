import React from 'react';
// react router
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
	const userData = localStorage.getItem('user');
	return (
		<Route {...rest} render={(props) => (
			userData ? (
		        <Layout>
		            <Component {...props} />
		        </Layout>
	        ) : (
	        	<Redirect to="/login" />
	        )
		)}/>
	)
}

export default PrivateRoute;