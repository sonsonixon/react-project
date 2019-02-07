import React, { Component } from 'react';
// react router
import { BrowserRouter as Router, 
		 Route, 
		 Switch
} from "react-router-dom";
// provider
import { Provider } from 'react-redux'
// redux store
import Store from './Store/store';

// main container
import Main from './Containers/Main';
import Outline from './Containers/Outline';

// modules
import CreateUser from './Modules/Users/CreateUser';
import UserList   from './Modules/Users/UserList';
import Dashboard  from './Modules/Dashboard';
import Todo 	  from './Modules/Todo';
import Login from './Modules/Login';

const AppRoute =({ component: Component, layout: Layout, ...rest }) => (
	<Route {...rest} render={props => (
	    <Layout>
	      	<Component {...props} />
	    </Layout>
  	)} />
)

class Routes extends Component {
    render() {
        return (
        	<Router>
        		<Provider store={Store}>
        			<Switch>
    					<AppRoute exact path="/" layout={Main} component={Dashboard} />
    					<AppRoute exact path="/users/create" layout={Main} component={CreateUser} />
    					<AppRoute exact path="/users" layout={Main} component={UserList} />
    					<AppRoute exact path="/todos" layout={Main} component={Todo} />
  						<AppRoute exact path="/login" layout={Outline} component={Login} />
	            	</Switch>   					  			
		        </Provider>
	        </Router>
        );
    }
}

export default Routes;

