import axios from 'axios'
import cookie from 'js-cookie'
import qs  from 'qs'

const token = 'x-auth-token'

/**
 * 格式化提交数据
 * 
 * @param {any} [parmas={}] 
 * @returns 
 */
const formatParmas = (parmas = {}) => {

    if (typeof parmas !== 'object') {
        return parmas
    }

    const arry = []

    for (let key in parmas) {
        arry.push(`${key}=${parmas[key]}`)
    }

    return arry.join('&')
}



axios.defaults.headers.Accept = 'application/json'
axios.defaults.headers[token] = cookie.get(token) || ''; 

const axiosPost = async (url = '', parmas) => {

    const response = await axios.post(url, qs.stringify(parmas))

    console.log('response', response);
    const {
        headers,
        data
    } = response

    if(headers[token]){
        cookie.set(token, headers[token])
    }

    return data

}

export default axiosPost
