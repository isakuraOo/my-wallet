import md5 from 'md5'
import axiosPost from './axios'
import cookie from 'js-cookie'

const hashPassword = ({account, password}) => {
    return md5(`${account}${password}`)
}

export const login = ({account, password}) => {

    const parmas = {
        account,
        password: hashPassword(password)
    }

    return axiosPost('http://localhost:3005/api/anon/login', parmas)
}

export const register = async ({account, password}) => {

    const parmas = {
        account,
        password: hashPassword(password)
    }

    return await axiosPost('http://localhost:3005/api/anon/registerUser', parmas)
}

export const loginByToken = async () => {
    return await axiosPost('http://localhost:3005/api/anon/getUserByToken')
}

