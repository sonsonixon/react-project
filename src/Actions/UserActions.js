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
} from '../ActionCreator';

export const clearUSERS = () => (dispatch) => Promise.resolve().then(() => {
    return dispatch({
        type: CLEAR_USERS
    })
})

// first name
export const hasErrorFIRSTNAME = () => ({
    type: HAS_ERROR_FIRSTNAME
});

export const hasSuccessFIRSTNAME = () => ({
    type: HAS_SUCCESS_FIRSTNAME
})

export const setErrorFIRSTNAME = (message) => ({
    type: SET_ERROR_FIRSTNAME,
    payload: { message }
})

export const clearFIRSTNAME = () => ({
    type: CLEAR_FIRSTNAME
})

// middle name
export const hasErrorMIDDLENAME = () => ({
    type: HAS_ERROR_MIDDLENAME
});

export const hasSuccessMIDDLENAME = () => ({
    type: HAS_SUCCESS_MIDDLENAME
})

export const setErrorMIDDLENAME = (message) => ({
    type: SET_ERROR_MIDDLENAME,
    payload: { message }
})

export const clearMIDDLENAME = () => ({
    type: CLEAR_MIDDLENAME
})

// last name
export const hasErrorLASTNAME = () => ({
    type: HAS_ERROR_LASTNAME
});

export const hasSuccessLASTNAME = () => ({
    type: HAS_SUCCESS_LASTNAME
})

export const setErrorLASTNAME = (message) => ({
    type: SET_ERROR_LASTNAME,
    payload: { message }
})

export const clearLASTNAME = () => ({
    type: CLEAR_LASTNAME
})

// username
export const hasErrorUSERNAME = () => ({
    type: HAS_ERROR_USERNAME
});

export const hasSuccessUSERNAME = () => ({
    type: HAS_SUCCESS_USERNAME
})

export const setErrorUSERNAME = (message) => ({
    type: SET_ERROR_USERNAME,
    payload: { message }
})

export const clearUSERNAME = () => ({
    type: CLEAR_USERNAME
})

// password
export const hasErrorPASSWORD = () => ({
    type: HAS_ERROR_PASSWORD
});

export const hasSuccessPASSWORD = () => ({
    type: HAS_SUCCESS_PASSWORD
})

export const setErrorPASSWORD = (message) => ({
    type: SET_ERROR_PASSWORD,
    payload: { message }
})

export const clearPASSWORD = () => ({
    type: CLEAR_PASSWORD
})

// status
export const hasErrorSTATUS = () => ({
    type: HAS_ERROR_STATUS
});

export const hasSuccessSTATUS = () => ({
    type: HAS_SUCCESS_STATUS
})

export const setErrorSTATUS = (message) => ({
    type: SET_ERROR_STATUS,
    payload: { message }
})

export const clearSTATUS = () => ({
    type: CLEAR_STATUS
})


