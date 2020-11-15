import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_GOING_REQUEST,
    LOAD_GOING_SUCCESS,
    LOAD_GOING_FAILURE,
    LOAD_GOINGS_SUCCESS,
    LOAD_GOINGS_REQUEST,
    LOAD_GOINGS_FAILURE,
    POST_GOING_FAILURE,
    POST_GOING_REQUEST,
    POST_GOING_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS

} from '../reducers/going';

function loadG(data) {
    return axios.get(`/going/${data}`);
}

function* loadGoing(action) {
    try {
        const result = yield call(loadG, action.data);
        yield put({
            type: LOAD_GOING_SUCCESS,
            data:result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_GOING_FAILURE,
            data: err.response.data,
        });
    }
}
function loadGs(data) {
    return axios.get('/goings', data);
}

function* loadGoings(action) {
    try {
        const result = yield call(loadGs, action.data);
        yield put({
            type: LOAD_GOINGS_SUCCESS,
            data:result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_GOINGS_FAILURE,
            data: err.response.data,
        });
    }
}
function uploadImagesAPI(data) {
    return axios.post('/going/images', data);
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        console.log(result)
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('/going', data);
}

function* addGoing(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: POST_GOING_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: POST_GOING_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchGoing() {
    yield throttle(5000, LOAD_GOING_REQUEST, loadGoing);
}
function* watchGoings() {
    yield throttle(5000, LOAD_GOINGS_REQUEST, loadGoings);
}
function* watchUpload() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST,uploadImages);
}
function* watchAddGoing() {
    yield takeLatest(POST_GOING_REQUEST, addGoing);
}

export default function* goingSaga() {
    yield all([
        fork(watchGoing),
        fork(watchGoings),
        fork(watchUpload),
        fork(watchAddGoing),
    ]);
}