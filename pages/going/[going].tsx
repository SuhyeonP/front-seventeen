import React, {useEffect, useState} from "react";
import Head from "next/head";
import AppLayout from "../../component/Layout";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import { LOAD_GOING_REQUEST} from "../../reducers/going";
import ImageG from "../../component/goingImage";
import {useRouter} from "next/router";
import {LOAD_ADMIN_REQUEST} from "../../reducers/admin";
import wrapper from "../../store/configureStore";
import axios from 'axios'
import {END}from 'redux-saga'

const GoingSeven: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const router=useRouter();
    const {going}=router.query;
    useEffect(()=>{
        dispatch({type:LOAD_GOING_REQUEST,data:Number(going)})
        dispatch({
            type:LOAD_ADMIN_REQUEST
        })
    },[])
    const {singleGoing,loadGoingDone,imagePaths} = useSelector((state:any) => state.going);
    return (
        <>
            <Head>
                <title>Going Seventeen</title>
            </Head>
            <AppLayout>
                <div className="going-detail">
                    {loadGoingDone?
                        <>
                            <ImageG images={singleGoing.REACT_SVT_IMAGEs}/>
                            <Link href={singleGoing.link}>
                                <a className="going-title">{singleGoing.title}</a>
                            </Link>
                            <p className="goto-youtube">제목을 클릭하면 유튜브로 가져용!</p>
                            <p className="going-explain">{singleGoing.explain}</p>

                        </>
                        :null}
                </div>
            </AppLayout>
        </>
    )
}


export default GoingSeven;