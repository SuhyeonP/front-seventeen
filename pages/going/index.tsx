import React, {useEffect} from "react";
import Head from "next/head";
import AppLayout from "../../component/Layout";
import PagingTable from "../../component/pagingGoing";
import {useDispatch} from "react-redux";
import {LOAD_GOINGS_REQUEST} from "../../reducers/going";

const GoingSeven: React.FunctionComponent = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch({
            type:LOAD_GOINGS_REQUEST
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

export default GoingSeven;