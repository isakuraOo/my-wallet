
export default {
    LOGIN: {
        PENDING: (state) => {
            return {
                ...state,
                userInfo: null,
                errorMsg: null
            }
        },
        SUCCESS: (state, {res}) => {
            return {
                ...state,
                userInfo: res.data
            }
        },
        ERROR: (state, {res}) => {
            return {
                ...state,
                errorMsg: res.message
            }
        },
    },
    REGISTER: {
        PENDING: (state) => {
            return {
                ...state,
                register: null,
                errorMsg: null,
            }
        },
        SUCCESS: (state, {res}) => {
            return {
                ...state,
                register: res.data
            }
        },
        ERROR: (state, {res}) => {
            return {
                ...state,
                errorMsg: res.message
            }
        }
    }
}
