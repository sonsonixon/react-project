import React, { Component } from 'react';

// react router
import { BrowserRouter as Router, 
		 Switch
} from "react-router-dom";

// provider
import { Provider } from 'react-redux';

// redux store
import store, { history } from '../Redux/Store/';

// connected react router
import { ConnectedRouter } from 'connected-react-router';

// container
import MainContainer    from '../Containers/Main';
import OutlineContainer from '../Containers/Outline';

// modules

// login
import Login from '../Modules/Login';

// dashboard
import Dashboard from '../Modules/Dashboard';

// users
import CreateUser from '../Modules/Users/Create';
import ListUser   from '../Modules/Users/List';
import UpdateUser from '../Modules/Users/Update';
import ChangePassword from '../Modules/Users/ChangePassword';

// broken link
import PageNotFound from '../Modules/PageNotFound';

// todos
import Todos	  from '../Modules/Todos';

// routes
import Private from '../Routes/Private';
import Public  from '../Routes/Public';

class Main extends Component {
    render() {
        return (
        	<Router>
        		<Provider store={store}>
                    <ConnectedRouter history={history}>
            			<Switch>
        					<Private exact={true} path="/" layout={MainContainer} component={Dashboard} />
        					<Private exact={true} path="/users/create" layout={MainContainer} component={CreateUser} />
                            <Private exact={true} path="/users/update/:uuid" layout={MainContainer} component={UpdateUser} />
                            <Private exact={true} path="/users/update/password/:uuid" layout={MainContainer} component={ChangePassword} />
        					<Private exact={true} path="/users" layout={MainContainer} component={ListUser} />
        					<Private exact={true} path="/todos" layout={MainContainer} component={Todos} />
      						<Public  exact={true} path="/login" layout={OutlineContainer} component={Login} />
                            <Private layout={MainContainer} component={PageNotFound} />
    	            	</Switch>
                    </ConnectedRouter>
		        </Provider>
	        </Router>
        );
    }
}

export default Main;

