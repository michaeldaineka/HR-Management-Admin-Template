const appReducer = (state = {}, action) => {
    switch(action.type) {
        case 'PRINT_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;
