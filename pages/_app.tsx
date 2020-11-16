import '../styles/globals.css'
import wrapper from "../store/configureStore";
import { AppProps } from 'next/app'
import '../styles/sevencommon.css'
import  '../styles/imageZoom.css';
import axios from 'axios'

function Main({ Component, pageProps }: AppProps) {


    return <Component {...pageProps} />
}

export default wrapper.withRedux(Main);