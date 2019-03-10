import apisauce from 'apisauce';

const create = () => {

	const baseURL = 'http://localhost/api/';

	const api = apisauce.create({

		baseURL,
		headers: {
			'Cache-Control': 'no-cache',
		},
		// 10 second timeout...
    	timeout: 10000000
	})

	// add token to request headers
	/*api.addAsyncRequestTransform(request => async () => {
	    request.headers['token'] = await localStorage.getItem('token');
  	});*/

	// login
	const login = (data) =>
		api.post('/login', {
			'data' : data
		}, {
			headers : {
          		'Accept': 'application/json'
            }
		});

	const getUser = (uuid) =>
		api.get('users/get/'+uuid, {
			headers: {
				'Accept' : 'application/json'
			}
		})

	// users
	const fetchUsers = (pageSize, page) => 
		api.post('users/fetch', {
			'pageSize': pageSize,
			'page': page
		}, {
			headers: {
				'Accept' : 'application/json'
			}
		});

	const createUser = (data) => 
		api.post('users/create', {
			'data' : data
        }, {
      		headers : {
          		'Accept': 'application/json'
            }
        });

	const fetchUser = (uuid) => 
		api.get('users/'+uuid, {
			headers : {
	      		'Accept': 'application/json'
	        }
		})

	const updateUser = (uuid, data) => 
		api.post('users/update/'+uuid, {
			'data' : data
		}, {
			headers: {
				'Accept' : 'application/json'
			}
		})

	// todos
	const addTodo = (data) => 
		api.post('todos/add', {
      		'data' : data
        }, {
      		headers : {
          		'Accept': 'application/json'
            }
        })

	const fetchTodos = (pageSize, page) => 
		api.post('todos/fetch', {
			'pageSize': pageSize,
			'page': page
		}, {
      		headers : {
          		'Accept': 'application/json'
            }
        });

	return {
		baseURL,
		login,
		getUser,
		fetchUsers,
		createUser,
		fetchUser,
		updateUser,
		addTodo,
		fetchTodos,		
	}
}

export default {
  	create
}