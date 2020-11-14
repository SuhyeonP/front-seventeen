import { all, fork } from 'redux-saga/effects';
import axios from 'axios'

import goingSaga from './going'
import adminSaga from './admin'
import membersSaga from './members'
import albumSaga from './album'

axios.defaults.baseURL='http://localhost:3065'
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    console.log('is it come here?')
    yield all([
        fork(goingSaga),
        fork(adminSaga),
        fork(albumSaga),
        fork(membersSaga),
    ]);
}