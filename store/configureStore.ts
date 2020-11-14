import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import rootSaga from '../sagas';

const configureStore=(context)=>{

    const sagaMiddleware=createSagaMiddleware();
    const enhancer=process.env.NODE_ENV==='production'
        ?compose(applyMiddleware(sagaMiddleware))
        : composeWithDevTools(applyMiddleware(sagaMiddleware))
    const store=createStore(reducer,enhancer);
    console.log('before go to saga')
    sagaMiddleware.run(rootSaga)
    return store;
}

const wrapper=createWrapper(configureStore,{ debug: process.env.NODE_ENV === 'development' });

export default wrapper;