import apisauce from 'apisauce';

const create = () => {

	const baseURL = 'http://localhost/api/';

	const api = apisauce.create({

		baseURL,
		headers: {
			'Cache-Control': 'no-cache'
		}

	})

	/*
	const fetchUsers = (pageSize, page) => 
		api.post('users/fetch', {
			'pageSize': pageSize,
			'page': page
		});
	*/

	const createUser = (data) => api.post('users/create', {
			'data' : data
        }, {
      		headers : {
          		'Accept': 'application/json'
            }
        });

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
		//fetchUsers,
		createUser,
		addTodo,
		fetchTodos,		
	}
}

export default {
  	create
}