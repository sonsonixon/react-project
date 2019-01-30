import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router, 
		 Route, 
		 Switch } from "react-router-dom";

// Redux Provider
import { Provider } from 'react-redux'

// Redux Store
import Store from './Store/store';

// Main Container
import Main from './Main';

// Modules
/*
import Create from './Modules/Users/Create';
import Counter from './Modules/Counter';
import Logout from './Modules/Logout';
import UserList from './Modules/Users/UserList';

<Route exact path="/users"
	render={(props) => <UserList {...props} />}
/>
<Route exact path="/users/create"
	render={(props) => <Create {...props} />}
<Route exact path="/redux/counter"
	render={(props) => <Counter {...props} />}
/>
<Route exact path="/logout"	
	render={(props) => <Logout {...props} />}
/>
/>
*/

import Dashboard from './Modules/Dashboard';
import Todo from './Modules/Todo';


class Routes extends Component {
    render() {
        return (
        	<Router>
        		<Provider store={Store}>
	        		<Main>
	        			<Switch>
	        				<Route exact path="/"
	        					render={(props) => <Dashboard {...props} value="Dashboard" />}
	        				/>

		            		<Route exact path="/todos"
		            			render={(props) => <Todo {...props} />}
		            		/>
			            	
		            	</Switch>
		            </Main>
		        </Provider>
	        </Router>
        );
    }
}

export default Routes;

