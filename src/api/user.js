import fetchPost from './fetch'
import md5 from 'md5'

const hashPassword = ({account, password}) => {
    return md5(`${account}:${password}`)
}

export const login = async ({account, password}) => {
    // const hashPassword = 
    const parmas = {
        account,
        password: hashPassword(password)
    }

    return await fetchPost('http://localhost:3005/api/user/login', parmas)
}

export const register = async ({account, password}) => {

    const parmas = {
        account,
        password: hashPassword(password)
    }

    return await fetchPost('http://localhost:3005/api/user/registerUser', parmas)
}

