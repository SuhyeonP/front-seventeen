import produce from "immer";

export const initialState={
    Going:[],
    singleGoing:null,
    loadGoingLoading:false,
    loadGoingDone:false,
    loadGoingError:null,
    loadGoingsLoading:false,
    loadGoingsDone:false,
    loadGoingsError:null,
    postGoingLoading:false,
    postGoingDone:false,
    postGoingError:null,
    imagePaths: [],
    hasMoreGoings: true,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
}
export type GoingProps=typeof initialState;

export const LOAD_GOING_REQUEST='LOAD_GOING_REQUEST'
export const LOAD_GOING_SUCCESS='LOAD_GOING_SUCCESS'
export const LOAD_GOING_FAILURE='LOAD_GOING_FAILURE'

export const POST_GOING_REQUEST='POST_GOING_REQUEST'
export const POST_GOING_SUCCESS='POST_GOING_SUCCESS'
export const POST_GOING_FAILURE='POST_GOING_FAILURE'

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LOAD_GOINGS_REQUEST='LOAD_GOINGS_REQUEST'
export const LOAD_GOINGS_SUCCESS='LOAD_GOINGS_SUCCESS'
export const LOAD_GOINGS_FAILURE='LOAD_GOINGS_FAILURE'

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addGoing=(data)=>({
    type:POST_GOING_REQUEST,
    data,
})
export const addImage=(data)=>({

})


const reducer= (state=initialState,action)=>produce(state,(draft)=>{
    switch(action.type){
        case LOAD_GOING_REQUEST:
            draft.loadGoingLoading=true;
            draft.loadGoingDone=false;
            draft.loadGoingError=null;
            break;
        case LOAD_GOING_SUCCESS:
            draft.loadGoingDone=true;
            draft.loadGoingLoading=false;
            draft.singleGoing=action.data
            break;
        case LOAD_GOING_FAILURE:
            draft.loadGoingLoading=false;
            draft.loadGoingError=action.error;
            break;
        case LOAD_GOINGS_REQUEST:
            draft.loadGoingsLoading=true;
            draft.loadGoingsDone=false;
            draft.loadGoingsError=null;
            break;
        case LOAD_GOINGS_SUCCESS:
            draft.loadGoingsDone=true;
            draft.loadGoingsLoading=false;
            draft.Going=action.data
            break;
        case LOAD_GOINGS_FAILURE:
            draft.loadGoingsLoading=false;
            draft.loadGoingsError=action.error;
            break;
        case POST_GOING_REQUEST:
            draft.postGoingLoading=true;
            draft.postGoingDone=false;
            draft.postGoingError=null;
            break;
        case POST_GOING_SUCCESS:
            draft.postGoingLoading=false;
            draft.postGoingDone=true;
            draft.Going.unshift(action.data)
            break;
        case POST_GOING_FAILURE:
            draft.postGoingLoading=false;
            draft.postGoingError=action.error;
            break;
        case UPLOAD_IMAGES_REQUEST:
            draft.uploadImagesLoading=true;
            draft.uploadImagesDone=false;
            draft.uploadImagesError=null;
            break;
        case UPLOAD_IMAGES_SUCCESS:
            draft.imagePaths=action.data;
            draft.uploadImagesLoading=false;
            draft.uploadImagesDone=true;
            break;
        case UPLOAD_IMAGES_FAILURE:
            draft.uploadImagesLoading=false;
            draft.uploadImagesError=action.error;
            break;
        default:
            break;
    }
})
export default reducer;