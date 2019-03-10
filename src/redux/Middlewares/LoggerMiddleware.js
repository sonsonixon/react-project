// Custom Middleware
export const Logger = ({dispatch, getState}) => next => action => {
	/*const state = getState();
	const ui = state.ui;
	const currentForm = ui.currentForm;*/

	console.log(action.type);

	next(action);

}