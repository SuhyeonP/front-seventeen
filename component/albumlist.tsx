import React, {useCallback, useEffect, useRef} from 'react'
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_ALBUM_REQUEST} from "../reducers/album";

const AlbumList: React.FC = () => {
    const {albumList} = useSelector((state: any) => state.album)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch({type:LOAD_ALBUM_REQUEST})
    }, [])

    return (
        <>
            {albumList.map((albums)=>(
                <li key={albums.id} className="album-item">
                    <Link href={albums.link}>
                        <a className="album-link">
                            <img src={albums.img} className="album-img"/>
                            <p className="album-title">{albums.title}</p>
                            <p>{albums.when}</p>
                            <p>{albums.part}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </>
    )
}
export default AlbumList