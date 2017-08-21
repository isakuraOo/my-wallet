import 'babel-polyfill'

let headers = new Headers()

headers = {
    'Accept': 'application/json',
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
}

const opts = {
    method: "POST",
    headers,
    mode: 'cors',
    cache: 'default'
}

/**
 * 格式化提交数据
 * 
 * @param {any} [parmas={}] 
 * @returns 
 */
const formatParmas = (parmas ={}) => {
    
    if(typeof parmas !== 'object'){
        return parmas
    }

    const arry = []

    for (let key in parmas) {
        arry.push(`${key}=${parmas[key]}`)
    }

    return arry.join('&')
}

const fetchPost = async (url = '', parmas) => {

    const init = {
        ...opts,
        method: "POST",
        body: formatParmas(parmas)
    }

    try {
        const response = await fetch(url, init);
        
        return await response.json()
    }
    catch(e) {
        console.warn("Err", e);
    }
}

export default fetchPost