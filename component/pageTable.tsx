import React, {useEffect} from 'react'
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {GoingProps, LOAD_GOINGS_REQUEST} from "../reducers/going";

const RealTable:React.FC=()=>{

    const {Going} = useSelector((state:any) => state.going);

    return (
        <>
            {Going.map((going,y)=>(
                <tr >
                    <td>{y}</td>
                    <td>
                        <Link href={"/going/"+going.id}><a>{going.title}</a></Link>
                    </td>
                    <td>{going.episode}</td>
                </tr>
            ))}
        </>
    )
}
export default RealTable