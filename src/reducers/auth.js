import {USER_LOGIN} from 'actions/user'

const appReducer = (state = {
    isAuthenticated: localStorage.getItem("token")
}, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default appReducer;
