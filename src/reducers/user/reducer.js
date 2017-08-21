
export default {
    LOGIN: {
        PENDING: (state) => {
            return {
                ...state,
                userInfo: null,
                errorMsg: null
            }
        },
        SUCCESS: (state, {result}) => {
            return {
                ...state,
                userInfo: result
            }
        },
        ERROR: (state, {result}) => {
            return {
                ...state,
                errorMsg: result
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
        SUCCESS: (state, {result}) => {
            return {
                ...state,
                register: result
            }
        },
        ERROR: (state, {result}) => {
            return {
                ...state,
                errorMsg: result
            }
        }
    }
}
