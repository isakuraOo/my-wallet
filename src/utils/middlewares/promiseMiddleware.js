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

    const {code} = res

    next({
        type: `${type}_${code == 200 ? progress[1] : progress[2]}`,
        res
    })

    return action
}

export default promiseMiddleware