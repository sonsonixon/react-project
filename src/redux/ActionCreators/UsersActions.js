import { 
    CLEAR_USERS,
    // first name
    HAS_ERROR_FIRSTNAME,
    HAS_SUCCESS_FIRSTNAME,
    SET_ERROR_FIRSTNAME,
    CLEAR_FIRSTNAME,
    // middle name
    HAS_ERROR_MIDDLENAME,
    HAS_SUCCESS_MIDDLENAME,
    SET_ERROR_MIDDLENAME,
    CLEAR_MIDDLENAME,
    // last name
    HAS_ERROR_LASTNAME,
    HAS_SUCCESS_LASTNAME,
    SET_ERROR_LASTNAME,
    CLEAR_LASTNAME,
    // username
    HAS_ERROR_USERNAME,
    HAS_SUCCESS_USERNAME,
    SET_ERROR_USERNAME,
    CLEAR_USERNAME,
    // password
    HAS_ERROR_PASSWORD,
    HAS_SUCCESS_PASSWORD,
    SET_ERROR_PASSWORD,
    CLEAR_PASSWORD,
    // status
    HAS_ERROR_STATUS,
    HAS_SUCCESS_STATUS,
    SET_ERROR_STATUS,
    CLEAR_STATUS,
    // role
    HAS_ERROR_ROLE,
    HAS_SUCCESS_ROLE,
    SET_ERROR_ROLE,
    CLEAR_ROLE,
} from '../Actions/';

export const clearUSERS = () => (dispatch) => Promise.resolve().then(() => {
    return dispatch({
        type: CLEAR_USERS
    })
})

// first name
export const hasErrorFIRSTNAME = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_FIRSTNAME
    })
}

export const hasSuccessFIRSTNAME = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_FIRSTNAME
    })
}

export const setErrorFIRSTNAME = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_FIRSTNAME,
        payload: { message }
    })
}

export const clearFIRSTNAME = () => (dispatch) => {
    return dispatch({
        type: CLEAR_FIRSTNAME
    })
}

// middle name
export const hasErrorMIDDLENAME = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_MIDDLENAME
    })
}

export const hasSuccessMIDDLENAME = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_MIDDLENAME
    })
}

export const setErrorMIDDLENAME = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_MIDDLENAME,
        payload: { message }
    })
}

export const clearMIDDLENAME = () => (dispatch) => {
    return dispatch({
        type: CLEAR_MIDDLENAME
    })
}

// last name
export const hasErrorLASTNAME = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_LASTNAME
    })
}

export const hasSuccessLASTNAME = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_LASTNAME
    })
}

export const setErrorLASTNAME = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_LASTNAME,
        payload: { message }
    })
}

export const clearLASTNAME = () => (dispatch) => {
    return dispatch({
        type: CLEAR_LASTNAME
    })
}

// username
export const hasErrorUSERNAME = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_USERNAME
    })
}

export const hasSuccessUSERNAME = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_USERNAME
    })
}

export const setErrorUSERNAME = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_USERNAME,
        payload: { message }
    })
}

export const clearUSERNAME = () => (dispatch) => {
    return dispatch({
        type: CLEAR_USERNAME
    })
}

// password
export const hasErrorPASSWORD = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_PASSWORD
    })
}

export const hasSuccessPASSWORD = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_PASSWORD
    })
}

export const setErrorPASSWORD = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_PASSWORD,
        payload: { message }
    })
}

export const clearPASSWORD = () => (dispatch) => {
    return dispatch({
        type: CLEAR_PASSWORD
    })
}

// status
export const hasErrorSTATUS = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_STATUS
    })
}

export const hasSuccessSTATUS = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_STATUS
    })
}

export const setErrorSTATUS = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_STATUS,
        payload: { message }
    })
}

export const clearSTATUS = () => (dispatch) => {
    return dispatch({
        type: CLEAR_STATUS
    })
}

// role
export const hasErrorROLE = () => (dispatch) => {
    return dispatch({
        type: HAS_ERROR_ROLE
    })
}

export const hasSuccessROLE = () => (dispatch) => {
    return dispatch({
        type: HAS_SUCCESS_ROLE
    })
}

export const setErrorROLE = (message) => (dispatch) => {
    return dispatch({
        type: SET_ERROR_ROLE,
        payload: { message }
    })
}

export const clearROLE = () => (dispatch) => {
    return dispatch({
        type: CLEAR_ROLE
    })
}


