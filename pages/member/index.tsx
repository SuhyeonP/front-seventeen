import React, {useEffect, useState} from "react";
import Head from "next/head";
import AppLayout from "../../component/Layout";
import MemberSimple from "../../component/memberSimple";
import {LOAD_MEMBERS_REQUEST} from "../../reducers/member";
import {useDispatch, useSelector} from "react-redux";


const Index:React.FunctionComponent=()=>{
    const dispatch=useDispatch();

    const {loadMembersLoading}=useSelector((state:any)=>state.member)
    useEffect(()=>{

        dispatch({
            type:LOAD_MEMBERS_REQUEST
        })
    },[])
    return (
        <>
            <Head>
                <title>Member</title>
            </Head>
            <AppLayout>
                <h2 className="section-title">-&nbsp;Members&nbsp;-</h2>
                <div className="member-info">
                    <ul className="simple-info">
                        {loadMembersLoading?<div className="loading-member"><p>로딩중</p></div>:<MemberSimple />}
                    </ul>
                </div>
            </AppLayout>
        </>
    )
}

export default Index;