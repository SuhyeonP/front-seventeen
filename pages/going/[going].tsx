import React, {useEffect, useState} from "react";
import Head from "next/head";
import AppLayout from "../../component/Layout";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import { LOAD_GOING_REQUEST} from "../../reducers/going";
import ImageG from "../../component/goingImage";
import {useRouter} from "next/router";

const GoingSeven: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const router=useRouter();
    const {going}=(router.query);
    useEffect(()=>{
        dispatch({type:LOAD_GOING_REQUEST,data:Number(going)})
    },[])
    const {singleGoing,loadGoingDone} = useSelector((state:any) => state.going);

    return (
        <>
            <Head>
                <title>Going Seventeen</title>
            </Head>
            <AppLayout>
                <div className="going-detail">
                    {loadGoingDone?
                        <>
                            {singleGoing.Images.length===0?
                                <>
                                    <i className="none-ground"><br/>개발중입니다.</i>
                                </>
                                :
                                <>
                                    <ImageG images={singleGoing.Images}/>
                                </>}
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