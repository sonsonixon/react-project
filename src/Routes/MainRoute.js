import React, { Component } from 'react';
// react router
import { BrowserRouter as Router, 
		 Switch
} from "react-router-dom";
// provider
import { Provider } from 'react-redux'
// redux store
import Store, { history } from '../Store/store';

// container
import Main    from '../Containers/Main';
import Outline from '../Containers/Outline';

// modules
import CreateUser from '../Modules/Users/CreateUser';
import UserList   from '../Modules/Users/UserList';
import Dashboard  from '../Modules/Dashboard';
import Todo 	  from '../Modules/Todo';
import Login      from '../Modules/Login';

// connected react router
import { ConnectedRouter } from 'connected-react-router';

// routes
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute  from '../Routes/PublicRoute';

class MainRoute extends Component {
    render() {
        return (
        	<Router>
        		<Provider store={Store}>
                    <ConnectedRouter history={history}>
            			<Switch>
        					<PrivateRoute exact={true} path="/" layout={Main}    component={Dashboard}  />
        					<PrivateRoute path="/users/create"  layout={Main}    component={CreateUser} />
        					<PrivateRoute path="/users"         layout={Main}    component={UserList}   />
        					<PrivateRoute path="/todos"         layout={Main}    component={Todo}       />
      						<PublicRoute  path="/login"         layout={Outline} component={Login}      />
    	            	</Switch>
                    </ConnectedRouter>
		        </Provider>
	        </Router>
        );
    }
}

export default MainRoute;

