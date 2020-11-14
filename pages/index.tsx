import React, {useState, useCallback, useEffect} from "react";
import Head from "next/head";
import AppLayout from "../component/Layout";
import Link from "next/link";
import  '../styles/Home.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../reducers/admin";

const Home:React.FunctionComponent=()=>{
  const {me}=useSelector((state:any)=>state.admin);
  const dispatch=useDispatch();
  const onLogout=useCallback(()=>{
    dispatch(logoutAction())
  },[])


  return (
      <>
        <Head>
          <title>Seventeen</title>
        </Head>
        <AppLayout>
          <ul className="main-list">
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

export default Home;