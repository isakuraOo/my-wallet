import {
    login
} from '../api/user'

export const loginAction = (parmas) => ({
    type: 'LOGIN',
    parmas,
    apiResult: login(parmas)
})