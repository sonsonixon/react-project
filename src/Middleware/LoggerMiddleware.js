// Custom Middleware
export const LoggerMiddleware = ({dispatch}) => next => action => {
	next(action);
	console.log(action.type);
}