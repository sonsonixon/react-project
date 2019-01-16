import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router, 
		 Route, 
		 Switch } from "react-router-dom";

// Redux Provider
import { Provider } from 'react-redux'

// Redux Store
import Store from './Store/store';

// Main Component
import Main from './Main';

// Views
import Create from './Views/Users/Create';
import Counter from './Views/Counter';
import Dashboard from './Views/Dashboard';
import Logout from './Views/Logout';
import Todo from './Views/Todo';
import UserList from './Views/Users/UserList';

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
	        				<Route exact path="/redux/counter"
	        					render={(props) => <Counter {...props} />}
	        				/>
		            	 	<Route exact path="/logout"	
		            			render={(props) => <Logout {...props} />}
		            		/>
		            		<Route exact path="/todo"
		            			render={(props) => <Todo {...props} />}
		            		/>
			            	<Route exact path="/users"
			            		render={(props) => <UserList {...props} />}
			            	/>
			            	<Route exact path="/users/create"
			            		render={(props) => <Create {...props} />}
			            	/>
		            	</Switch>
		            </Main>
		        </Provider>
	        </Router>
        );
    }
}

export default Routes;

