import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import album from "./album";
import member from "./member";
import going from "./going";
import admin from "./admin";

const rootReducer=combineReducers({
    index:(state:object={},action)=>{//hydrate를 위해서 reducer 추가하는거임 서버사이드렌더링!!!
        switch(action.type){
            case HYDRATE:
                return {...state,...action.payload}
            default:
                return state
        }
    },
    admin,
    album,
    going,
    member,
})


export default rootReducer