import fetchPost from '../../api/fetch'

const progress = ['PENDING', 'SUCCESS', 'ERROR']


const promiseMiddleware = ({ getState, dispatch }) => next => async (action) => {

    const { payload, type } = action

    if (!payload) {
        next(action)
        return
    }

    next({
        type: `${type}_${progress[0]}`,
        result: null,
    })

    const res = await payload

    const {code, data, message} = res

    if(code == '200'){
        next({
            type: `${type}_${progress[1]}`,
            result: data
        })
    }
    else{
        next({
            type: `${type}_${progress[2]}`,
            result: message,
        })
    }

    return action
}

export default promiseMiddleware