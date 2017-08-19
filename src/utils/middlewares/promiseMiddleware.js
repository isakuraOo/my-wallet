const resultStatus = ['PADDING', 'SUCCESS', 'ERROR']

const promiseMiddleware = ({ getState, dispatch }) => next => action => {
    console.log('getState', getState());
    console.log('actison', action);

    const { apiResult } = action

    console.log('typeof', typeof apiResult);

    if (!apiResult || typeof apiResult != 'function') {
        next(action)
    }

    return action
}

export default promiseMiddleware