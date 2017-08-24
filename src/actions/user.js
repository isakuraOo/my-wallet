import {
    login,
    register,
    loginByToken
} from '../api/user'

export const loginAction = (parmas) => ({
    type: 'LOGIN',
    api: login(parmas)
})

export const registerAction = (parmas) => ({
    type: 'REGISTER',
    api: register(parmas)
})

export const loginByTokenAction = () => ({
    type: 'LOGIN',
    api: loginByToken()
})

export const clearUser = () => ({
    type: 'CLEAR_USER'
})
