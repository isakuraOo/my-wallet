const progress = ['PENDING', 'SUCCESS', 'ERROR']

const promiseMiddleware = ({ getState, dispatch }) => next => async (action) => {

    const { api, type } = action

    if (!api) {
        next(action)
        return
    }

    next({
        type: `${type}_${progress[0]}`,
        result: null,
    })

    const res = await api

    const {code} = res

    next({
        type: `${type}_${code == 200 ? progress[1] : progress[2]}`,
        res
    })

    return action
}

export default promiseMiddleware