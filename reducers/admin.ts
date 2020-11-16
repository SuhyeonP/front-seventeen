import produce from '../util/produce';
export const initialState={
    loginData:{},
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    loadAdminLoading:false,
    loadAdminDone:false,
    loadAdminError:null,
    me:null,
}

export const LOGIN_ADMIN_REQUEST='LOGIN_ADMIN_REQUEST'
export const LOGIN_ADMIN_SUCCESS='LOGIN_ADMIN_SUCCESS'
export const LOGIN_ADMIN_FAILURE='LOGIN_ADMIN_FAILURE'

export const LOGOUT_ADMIN_REQUEST='LOGOUT_ADMIN_REQUEST'
export const LOGOUT_ADMIN_SUCCESS='LOGOUT_ADMIN_SUCCESS'
export const LOGOUT_ADMIN_FAILURE='LOGOUT_ADMIN_FAILURE'

export const LOAD_ADMIN_REQUEST='LOAD_ADMIN_REQUEST'
export const LOAD_ADMIN_SUCCESS='LOAD_ADMIN_SUCCESS'
export const LOAD_ADMIN_FAILURE='LOAD_ADMIN_FAILURE'

export const loginAction = (data) => ({
    type: LOGIN_ADMIN_REQUEST,
    data,

});
export const logoutAction =()=> ({
    type: LOGOUT_ADMIN_REQUEST
});



const reducer= (state=initialState,action)=>produce(state,(draft)=>{
    switch(action.type){
        case LOGIN_ADMIN_REQUEST:
            draft.logInLoading=true;
            draft.logInError=null;
            draft.logInDone=false;
            break;
        case LOGIN_ADMIN_SUCCESS:
            console.log('login admin success reducer')
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
        case LOAD_ADMIN_REQUEST:
            draft.loadAdminLoading = true;
            draft.loadAdminError = null;
            draft.loadAdminDone = false;
            break;
        case  LOAD_ADMIN_SUCCESS:
            draft.loadAdminLoading = false;
            draft.loadAdminDone = true;
            draft.me = action.data;
            break;
        case LOAD_ADMIN_FAILURE:
            draft.loadAdminLoading = false;
            draft.loadAdminError = action.error;
            break;
        default:
            break;
    }
})
export default reducer;