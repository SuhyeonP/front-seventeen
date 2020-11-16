import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';
import album from "./album";
import member from "./member";
import going from "./going";
import admin from "./admin";

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                admin,
                album,
                going,
                member,
            });
            return combinedReducer(state, action);
        }
    }
};


export default rootReducer