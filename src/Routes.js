import React, { Component } from 'react';
// react router
import { BrowserRouter as Router, 
		 Route, 
		 Switch } from "react-router-dom";
// provider
import { Provider } from 'react-redux'
// redux store
import Store from './Store/store';

// main container
import Main from './Main';

// modules

// users
import CreateUser    from './Modules/Users/CreateUser';
import UserList  from './Modules/Users/UserList';
import Dashboard from './Modules/Dashboard';
import Todo      from './Modules/Todo';

/*
import Counter from './Modules/Counter';
import Logout from './Modules/Logout';

<Route exact path="/redux/counter"
	render={(props) => <Counter {...props} />}
/>
<Route exact path="/logout"	
	render={(props) => <Logout {...props} />}
/>
/>
*/

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
	        				<Route exact path="/users"
								render={(props) => <UserList {...props} />}
							/>
							<Route exact path="/users/create"
								render={(props) => <CreateUser {...props} />}
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

