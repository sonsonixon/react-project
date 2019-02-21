import React, { Component } from 'react';
// react router
import { BrowserRouter as Router, 
		 Switch
} from "react-router-dom";
// provider
import { Provider } from 'react-redux'
// redux store
import store, { history } from '../redux/store/';

// container
import MainContainer    from '../containers/MainContainer';
import OutlineContainer from '../containers/OutlineContainer';

// modules
import CreateUser from '../modules/users/CreateUser';
import UserList   from '../modules/users/UserList';
import Dashboard  from '../modules/Dashboard';
import Todo 	  from '../modules/Todo';
import Login      from '../modules/Login';

// connected react router
import { ConnectedRouter } from 'connected-react-router';

// routes
import ProtectedRoute from '../routes/ProtectedRoute';
import PublicRoute  from '../routes/PublicRoute';

class MainRoute extends Component {
    render() {
        return (
        	<Router>
        		<Provider store={store}>
                    <ConnectedRouter history={history}>
            			<Switch>
        					<ProtectedRoute exact={true} path="/" layout={MainContainer}    component={Dashboard}  />
        					<ProtectedRoute path="/users/create"  layout={MainContainer}    component={CreateUser} />
        					<ProtectedRoute path="/users"         layout={MainContainer}    component={UserList}   />
        					<ProtectedRoute path="/todos"         layout={MainContainer}    component={Todo}       />
      						<PublicRoute  path="/login"           layout={OutlineContainer} component={Login}      />
    	            	</Switch>
                    </ConnectedRouter>
		        </Provider>
	        </Router>
        );
    }
}

export default MainRoute;

