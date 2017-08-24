import axios from 'axios'
import cookie from 'js-cookie'
import qs  from 'qs'

const token = 'x-auth-token'

axios.defaults.headers.Accept = 'application/json'
axios.defaults.headers[token] = cookie.get(token) || ''; 

const axiosPost = async (url = '', parmas) => {

    const response = await axios.post(url, qs.stringify(parmas))

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
