import {
    login,
    register
} from '../api/user'

export const loginAction = (parmas) => ({
    type: 'LOGIN',
    api: login(parmas)
})

export const registerAction = (parmas) => ({
    type: 'REGISTER',
    api: register(parmas)
})


export const clearUser = () => ({
    type: 'CLEAR_USER'
})
