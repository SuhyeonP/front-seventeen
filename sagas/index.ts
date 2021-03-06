import { all, fork } from 'redux-saga/effects';
import axios from 'axios'

import goingSaga from './going'
import adminSaga from './admin'
import membersSaga from './members'
import albumSaga from './album'
import {backURL} from "../config/config";

axios.defaults.baseURL=backURL
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([
        fork(goingSaga),
        fork(adminSaga),
        fork(albumSaga),
        fork(membersSaga),
    ]);
}