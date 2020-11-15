import {all, call, delay, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
    LOGIN_ADMIN_REQUEST,
    LOGIN_ADMIN_SUCCESS,
    LOGIN_ADMIN_FAILURE,
    LOGOUT_ADMIN_REQUEST,
    LOGOUT_ADMIN_SUCCESS,
    LOGOUT_ADMIN_FAILURE
}from '../reducers/admin';


function logInAPI(data) {
    return axios.post('/admin/login', data);
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI,action.data);
        yield put({
            type: LOGIN_ADMIN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOGIN_ADMIN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/admin/logout');
}

function* logOut() {
    try {
        const result = yield call(logOutAPI);
        yield put({
            type: LOGOUT_ADMIN_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOGOUT_ADMIN_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchLogIn() {
    yield takeLatest(LOGIN_ADMIN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOGOUT_ADMIN_REQUEST, logOut);
}

export default function* adminSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut)
    ]);
}