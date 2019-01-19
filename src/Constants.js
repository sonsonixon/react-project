// UI
export const SHOW_FETCH_LOADER = '[UI] SHOW_FETCH_LOADER';
export const HIDE_FETCH_LOADER = '[UI] HIDE_FETCH_LOADER';
export const SHOW_POST_LOADER = '[UI] SHOW_POST_LOADER';
export const HIDE_POST_LOADER = '[UI] HIDE_POST_LOADER';

// COUNTER_
export const INCREMENT  = 'INCREMENT';
export const DECREMENT	= 'DECREMENT';

/* __USERS__ START */
/*
User data fetching constants
*/
export const FETCH_USERS_BEGIN   = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

/*
This is for input handling.
Mainly to get input value and update the state.
*/
export const GET_FIRSTNAME 	= 'GET_FIRSTNAME';
export const GET_MIDDLENAME = 'GET_MIDDLENAME';
export const GET_LASTNAME 	= 'GET_LASTNAME';
export const GET_USERNAME 	= 'GET_USERNAME';

// **********
export const IS_VALID_FIRSTNAME = 'IS_VALID_FIRSTNAME';
export const IS_INVALID_FIRSTNAME = 'IS_INVALID_FIRSTNAME';

/*
User creation constants
*/
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_BEGIN = 'CREATE_USER_BEGIN';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

/* 
This is to clear input fields state in the user module.
Mainly use to reset a form every successful request.
*/
export const CLEAR_USERS_STATE = 'CLEAR_USERS_STATE'; 
/* END */

// TODO_
export const INVALID_USERID = '[UI, TODO] INVALID_USERID';
export const INVALID_TITLE = '[UI, TODO] INVALID_TITLE';

export const VALID_USERID = '[UI, TODO] VALID_USERID';
export const VALID_TITLE = '[UI, TODO] VALID_TITLE';

export const CLEAR_CLASS_USERID = '[UI, TODO] CLEAR_CLASS_USERID';
export const CLEAR_CLASS_TITLE = '[UI, TODO] CLEAR_CLASS_TITLE';
export const CLEAR_CLASS_TODO = '[UI, TODO] CLEAR_CLASS_TODO';

export const CLEAR_STATE_TODO = '[TODO] CLEAR_STATE_TODO';

export const ADD_REQUEST_BEGIN = '[TODO] ADD_REQUEST_BEGIN';
export const ADD_SUCCESS = '[TODO] ADD_SUCCESS';
export const ADD_FAILED = '[TODO] ADD_FAILED';

export const CHANGE_USERID = '[TODO] CHANGE_USERID';
export const CHANGE_TITLE = '[TODO] CHANGE_TITLE';

export const FETCH_REQUEST_BEGIN = '[TODO] FETCH_REQUEST_BEGIN';
export const FETCH_SUCCESS = '[TODO] FETCH_SUCCESS';
export const FETCH_FAILED = '[TODO] FETCH_FAILED';
export const UPDATE_TODOS = '[TODO] UPDATE_TODOS';

export const HAS_ERROR = 'HAS_ERROR';
export const HAS_SUCCESS = 'HAS_SUCCESS';