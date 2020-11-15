import  produce from 'immer';

export const initialState={
    albumList:[],
    loadAlbumLoading:false,
    loadAlbumDone:false,
    loadAlbumError:null,
    hasMoreAlbum:true,
    allCount:null,
}

export const LOAD_ALBUM_REQUEST='LOAD_ALBUM_REQUEST'
export const LOAD_ALBUM_SUCCESS='LOAD_ALBUM_SUCCESS'
export const LOAD_ALBUM_FAILURE='LOAD_ALBUM_FAILURE'

const reducer= (state=initialState,action)=>produce(state,(draft)=>{
    switch(action.type){
        case LOAD_ALBUM_REQUEST:
            console.log(action)
            draft.loadAlbumLoading=true;
            draft.loadAlbumError=null;
            draft.loadAlbumDone=false;
            break;
        case LOAD_ALBUM_SUCCESS:
            draft.loadAlbumLoading=false;
            draft.loadAlbumDone=true;
            draft.albumList=action.data;
            break;
        case LOAD_ALBUM_FAILURE:
            draft.loadAlbumLoading=false;
            draft.loadAlbumError=action.error;
            break;
        default:
            break;
    }
})
export default reducer;