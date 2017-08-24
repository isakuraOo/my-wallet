import initState from './initState'

const user_reducers = {
    LOGIN_PENDING: (state) => {
        return {
            ...state,
            userInfo: null,
            login: false,
            errorMsg: null
        }
    },
    LOGIN_SUCCESS: (state, { res }) => {
        return {
            ...state,
            login: true,
            userInfo: res.data
        }
    },
    LOGIN_ERROR: (state, { res }) => {
        return {
            ...state,
            login: false,
            errorMsg: res.message
        }
    },
    REGISTER_PENDING: (state) => {
        return {
            ...state,
            register: null,
            errorMsg: null,
        }
    },
    REGISTER_SUCCESS: (state, { res }) => {
        return {
            ...state,
            register: res.data
        }
    },
    REGISTER_ERROR: (state, { res }) => {
        return {
            ...state,
            errorMsg: res.message
        }
    },
    CLEAR_USER: (state) => {
        return {
            ...state,
            userInfo: null
        }
    }
}

const userReducer = (state = initState, action) => {

    const { type } = action

    if (!user_reducers[type]) {
        return state
    }

    return user_reducers[type](state, action)

}

export default userReducer
