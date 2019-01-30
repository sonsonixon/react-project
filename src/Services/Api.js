import apisauce from 'apisauce'

const create = () => {

	const baseURL = 'http://localhost/api/';

	const api = apisauce.create({

		baseURL,
		headers: {
			'Cache-Control': 'no-cache'
		}

	})

	const fetchUsers = (pageSize, page) => 
		api.post('users/fetch', {
			'pageSize': pageSize,
			'page': page
		});

	const createUser = (firstname, lastname, username) => 
		api.post('users/create', {
      		'first_name': firstname,
      		'last_name': lastname,
      		'username': username
        }, 
        {
      		headers : {
          		'Accept': 'application/json'
            }
        });

	const addTodo = (userid, title) => 
		api.post('todos/add', {
			'userid': userid,
			'title': title
		},
		{
			header: {
				'Accept': 'application/json'
			}
		})

	const fetchTodos = (pageSize, page) => 
		api.post('todos/fetch', {
			'pageSize': pageSize, 
			'page': page
		});

	return {
		baseURL,
		fetchUsers,
		createUser,
		addTodo,
		fetchTodos,		
	}
}

export default {
  	create
}