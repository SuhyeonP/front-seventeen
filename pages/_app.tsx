import '../styles/globals.css'
import wrapper from "../store/configureStore";
import { AppProps } from 'next/app'
import '../styles/sevencommon.css'
import withReduxSaga from 'next-redux-saga'
import  '../styles/imageZoom.css';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(withReduxSaga(App));