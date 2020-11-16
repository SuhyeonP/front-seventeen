import React, {useEffect} from "react";
import AppLayout from "../../component/Layout";
import PagingTable from "../../component/pagingGoing";
import {useDispatch} from "react-redux";
import {LOAD_GOINGS_REQUEST} from "../../reducers/going";
import Head from "next/head";
import {LOAD_ADMIN_REQUEST} from "../../reducers/admin";
import wrapper from "../../store/configureStore";
import axios from "axios";
import {END} from "redux-saga";

const GoingSeven: React.FunctionComponent = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch({
            type:LOAD_ADMIN_REQUEST
        })
        dispatch({
            type: LOAD_GOINGS_REQUEST
        })
    },[])
    return (
        <>
            <Head>
                <title>Going Seventeen</title>
            </Head>
            <AppLayout>
                <h2 className="section-title">-&nbsp;Going&nbsp;-</h2>
                <div className="yeardiv">
                    <select>
                        <option value="2020" selected={true}>2020</option>
                        <option value="2019">2019(개발중)</option>
                        <option value="1000">LEGEND(개발중)</option>
                    </select>
                </div>
                <PagingTable/>
            </AppLayout>
        </>
    )
}

export const getServerSideProps=wrapper.getServerSideProps(async(context)=>{
    console.log('is it work? ssss')
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type:LOAD_ADMIN_REQUEST
    })
    context.store.dispatch({
        type: LOAD_GOINGS_REQUEST
    })
    context.store.dispatch(END);
    await context.store.dispatch({type:LOAD_GOINGS_REQUEST})
})//type버전에서 store.sagatask왜 안될까..

export default GoingSeven;