import produce from "immer";
export const initialState={
    loginData:{},
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    me:null,
}

export const LOGIN_ADMIN_REQUEST='LOGIN_ADMIN_REQUEST'
export const LOGIN_ADMIN_SUCCESS='LOGIN_ADMIN_SUCCESS'
export const LOGIN_ADMIN_FAILURE='LOGIN_ADMIN_FAILURE'

export const LOGOUT_ADMIN_REQUEST='LOGOUT_ADMIN_REQUEST'
export const LOGOUT_ADMIN_SUCCESS='LOGOUT_ADMIN_SUCCESS'
export const LOGOUT_ADMIN_FAILURE='LOGOUT_ADMIN_FAILURE'

export const loginAction = (data) => ({
    type: LOGIN_ADMIN_REQUEST,
    data,

});
export const logoutAction =()=> ({
    type: LOGOUT_ADMIN_REQUEST
});



const reducer= (state=initialState,action)=>produce(state,(draft)=>{
    console.log('reducer login here')
    switch(action.type){
        case LOGIN_ADMIN_REQUEST:
            draft.logInLoading=true;
            draft.logInError=null;
            draft.logInDone=false;
            break;
        case LOGIN_ADMIN_SUCCESS:
            console.log('success here')
            draft.me=action.data
            draft.logInLoading=false;
            draft.logInDone=true;
            break;
        case LOGIN_ADMIN_FAILURE:
            draft.logInLoading=false;
            draft.logInError = action.error;
            break;
        case LOGOUT_ADMIN_REQUEST:
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;
        case  LOGOUT_ADMIN_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
        case LOGOUT_ADMIN_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;
        default:
            break;
    }
})
export default reducer;