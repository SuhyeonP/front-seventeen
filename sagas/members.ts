import {all, call, delay, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_MEMBERS_FAILURE,
    LOAD_MEMBERS_SUCCESS,
    LOAD_MEMBERS_REQUEST,
    LOAD_MEMBER_FAILURE,
    LOAD_MEMBER_SUCCESS,
    LOAD_MEMBER_REQUEST,
} from '../reducers/member';

function loadMAPI(data) {
    return axios.get(`/members/${data}`);
}

function* loadM(action) {
    try {
        const result = yield call(loadMAPI, action.data);
        yield put({
            type: LOAD_MEMBER_SUCCESS,
            data:result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_MEMBER_FAILURE,
            data: err.response.data,
        });
    }
}
function loadMsAPI(data) {
    return axios.get('/members', data);
}

function* loadMs(action) {
    try {
        const result = yield call(loadMsAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOAD_MEMBERS_SUCCESS,
            data:result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_MEMBERS_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchLoadM() {
    yield takeLatest(LOAD_MEMBER_REQUEST,loadM);
}
function* watchLoadMS() {
    yield takeLatest(LOAD_MEMBERS_REQUEST,loadMs);
}

export default function* memberSaga() {
    yield all([
        fork(watchLoadM),
        fork(watchLoadMS)
    ]);
}