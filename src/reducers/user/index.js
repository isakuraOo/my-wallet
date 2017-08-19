import reducers from './reducer'

import initState from './state'

const userReducer = (state = initState, {type, parmas}) => {
    
    if(!reducers[type]){
        return state
    }

    return reducers[type](state, parmas)
}

export default userReducer
