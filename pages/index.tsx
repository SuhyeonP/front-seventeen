import React, {useState, useCallback, useEffect} from "react";
import Head from 'next/head';
import Link from 'next/link'
import AppLayout from "../component/Layout";
import  '../styles/Home.module.css';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_ADMIN_REQUEST, logoutAction} from "../reducers/admin";
import wrapper from "../store/configureStore";
import axios from 'axios'
import {END} from 'redux-saga';


const Home:React.FunctionComponent=()=>{
  const {me}=useSelector((state:any)=>state.admin);
  const dispatch=useDispatch();
  const onLogout=useCallback(()=>{
    dispatch(logoutAction())
  },[])
  useEffect(()=>{
    dispatch({
      type:LOAD_ADMIN_REQUEST
    })
  },[])

  return (
      <>
        <Head>
          <title>Seventeen</title>
        </Head>
        <AppLayout>
          <ul className="main-list" style={{height:"80vh"}}>
            <li>
              <Link href="/aboutSeven"><a>About Seventeen</a></Link>
            </li>
            <li>
              <Link href="/member"><a>Member</a></Link>
            </li>
            <li>
              <Link href="/going"><a>Going Seventeen</a></Link>
            </li>
            <li>
              <Link href="/album"><a>Album</a></Link>
            </li>
            {me?
                <>
                  <li>
                    <Link href="/admin/going"><a>ADMIN</a></Link>
                  </li>
                  <button onClick={onLogout}>로그아웃</button>
                </>
                :null
            }
          </ul>
        </AppLayout>
      </>
  )
}
export const getServerSideProps=wrapper.getServerSideProps(async(context)=>{
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type:LOAD_ADMIN_REQUEST
  })
  context.store.dispatch(END);
  // await context.store.sagaTask.toPromise();
})


export default Home;