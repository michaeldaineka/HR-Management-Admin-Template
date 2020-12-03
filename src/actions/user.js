export const USER_LOGIN = 'user/login';

const userLogin = () => ({type: USER_LOGIN})

export const userLoginAsync = () => {
    return (dispatch) => {
        localStorage.setItem('isAuthenticated', true)
        dispatch(userLogin())
    }
} 