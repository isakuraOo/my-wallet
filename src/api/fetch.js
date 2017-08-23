import 'babel-polyfill'

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

const fetchPost = async (url = '', parmas) => {

    const init = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: 'cors',
        cache: 'default',
        body: formatParmas(parmas)
    }

    try {
        const response = await fetch(url, init);

        const test = await response.headers.get('x-auth-token')

        return await response.json()
    }
    catch (e) {
        console.warn("Err", e);
    }
}

export {
    fetchPost
}