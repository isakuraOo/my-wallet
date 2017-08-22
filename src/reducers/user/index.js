import reducers from './reducer'
import initState from './state'


const userReducer = (state = initState, {type, res, parmas}) => {

    const [actionType, status] = type.split('_')
    
    if(!reducers[actionType]){
        return state
    }
    else if(!reducers[actionType][status] && parmas){
        return {
            ...state,
            parmas
        }
    }else{
        return reducers[actionType][status](state, {res, parmas})
    }
   
}

export default userReducer
