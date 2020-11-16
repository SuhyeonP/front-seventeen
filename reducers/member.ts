import produce from '../util/produce';

export const initialState={
    member:null,
    members:[],
    loadMemberLoading:false,
    loadMemberDone:false,
    loadMemberError:null,
    loadMembersLoading:false,
    loadMembersDone:false,
    loadMembersError:null,
}
export const LOAD_MEMBERS_REQUEST='LOAD_MEMBERS_REQUEST'
export const LOAD_MEMBERS_SUCCESS='LOAD_MEMBERS_SUCCESS'
export const LOAD_MEMBERS_FAILURE='LOAD_MEMBERS_FAILURE'
export const LOAD_MEMBER_REQUEST='LOAD_MEMBER_REQUEST'
export const LOAD_MEMBER_SUCCESS='LOAD_MEMBER_SUCCESS'
export const LOAD_MEMBER_FAILURE='LOAD_MEMBER_FAILURE'

const reducer= (state=initialState,action)=>produce(state,(draft)=>{
    switch(action.type){
        case LOAD_MEMBER_REQUEST:
            draft.loadMemberLoading=true;
            draft.loadMemberDone=false;
            draft.loadMemberError=null;
            break;
        case LOAD_MEMBER_SUCCESS:
            draft.loadMemberLoading=false;
            draft.loadMemberDone=true;
            draft.member=action.data;
            break;
        case LOAD_MEMBER_FAILURE:
            draft.loadMemberLoading=false;
            draft.loadMemberError=action.error;
            break;
        case LOAD_MEMBERS_REQUEST:
            draft.loadMembersLoading=true;
            draft.loadMembersDone=false;
            draft.loadMembersError=null;
            break;
        case LOAD_MEMBERS_SUCCESS:
            draft.loadMembersLoading=false;
            draft.loadMembersDone=true;
            draft.members=action.data
            break;
        case LOAD_MEMBERS_FAILURE:
            draft.loadMembersLoading=false;
            draft.loadMembersError=action.error;
            break;
        default:
            break;
    }
})
export default reducer;