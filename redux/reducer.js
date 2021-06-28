import {LOGIN,POST} from './type'
const initialState={
    username:'',
    post:[]
}

const stateReducer=(state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case LOGIN: return {
            ...state,
            username:action.username,

        }
        case POST: return{
            ...state,
            post:[...state.post,action.data]
        }
        default:return{
            ...state
        }
    }

}

export default stateReducer;