import fetchPost from './fetch'

export const login = async (parmas) => await fetchPost('http://localhost:3005/api/user/login', parmas)

export const register = async (parmas) => await fetchPost('http://localhost:3005/api/user/registerUser', parmas)

