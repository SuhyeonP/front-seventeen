import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_ALBUM_FAILURE,
    LOAD_ALBUM_SUCCESS,
    LOAD_ALBUM_REQUEST,
} from '../reducers/album';


function loadMsAPI(data) {
    return axios.get(`/album`,data);
}

function* loadMs(action) {
    try {
        const result = yield call(loadMsAPI,action.data);
        yield put({
            type: LOAD_ALBUM_SUCCESS,
            data:result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_ALBUM_FAILURE,
            data: err.response.data,
        });
    }
}


function* watchAlbum() {
    yield throttle(3000,LOAD_ALBUM_REQUEST,loadMs);
}

export default function* albumSaga() {
    yield all([
        fork(watchAlbum)
    ]);
}