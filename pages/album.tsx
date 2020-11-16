import React, {useCallback, useEffect, useState} from "react";
import Head from "next/head";
import AppLayout from "../component/Layout";
import AlbumList from "../component/albumlist";

const Album: React.FunctionComponent = () => {

    return (
        <>
            <Head>
                <title>Going Seventeen</title>
            </Head>
            <AppLayout>
                <h1 className="mini-text">Album</h1>
                <div className="album-sec">
                    <ul className="album-list">
                        <AlbumList/>
                    </ul>
                </div>
            </AppLayout>
        </>
    )
}

export default Album;