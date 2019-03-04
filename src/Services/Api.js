import apisauce from 'apisauce';

const create = () => {

	const baseURL = 'http://localhost/api/';

	const api = apisauce.create({

		baseURL,
		headers: {
			'Cache-Control': 'no-cache'
		},
		// 10 second timeout...
    	timeout: 10000000
	})

	// add token to request headers
	api.addAsyncRequestTransform(request => async () => {
	    request.headers['token'] = await localStorage.getItem('token');
  	});

	// login
	const login = (data) =>
		api.post('/login', {
			'data' : data
		}, {
			headers : {
          		'Accept': 'application/json'
            }
		});

	// users
	const fetchUsers = (pageSize, page) => 
		api.post('users/fetch', {
			'pageSize': pageSize,
			'page': page
		});

	const createUser = (data) => api.post('users/create', {
			'data' : data
        }, {
      		headers : {
          		'Accept': 'application/json'
            }
        });


	// todos
	const addTodo = (data) => api.post('todos/add', {
      		'data' : data
        }, {
      		headers : {
          		'Accept': 'application/json'
            }
        })

	const fetchTodos = (pageSize, page) => api.post('todos/fetch', {
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
		fetchUsers,
		createUser,
		addTodo,
		fetchTodos,		
	}
}

export default {
  	create
}