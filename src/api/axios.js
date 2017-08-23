import axios from 'axios'
import cookie from 'js-cookie'

const _axios = axios.create({
    method: 'post',
    timeout: 8000,
    headers: {
        'Accept': 'application/json',  
        "Content-type": "application/json; charset=UTF-8",
        'x-auth-token': cookie.get('x-auth-token') || '123'
    },
});

axios.defaults.headers.Accept = 'application/json'


const axiosPost = async (url = '', data) => {

        const response = await axios.post(url, data)

        console.log('response', response);

        return response
   
}

export default axiosPost
