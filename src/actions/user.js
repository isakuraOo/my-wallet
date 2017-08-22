import {
    login,
    register
} from '../api/user'

export const loginAction = (parmas) => ({
    type: 'LOGIN',
    payload: login(parmas)
})

export const registerAction = (parmas) => ({
    type: 'REGISTER',
    payload: register(parmas)
})
