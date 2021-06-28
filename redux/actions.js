
import { LOGIN ,POST} from "./type"

export const userName=(name)=>{
    return {
        type: LOGIN,
        username:name
    }

}

export const post=(key,data)=>{
    return{
        type: POST,
        key:key,
        data:data
    }
}