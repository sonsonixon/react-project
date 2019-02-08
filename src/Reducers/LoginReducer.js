const initialState = {
    username: {
        isValid: false,
    },
    password: {
        isValid: false,
    }
};

export default (state = initialState, action) => {

    switch(action.type) {
        
        default:
            return state;
    }
}