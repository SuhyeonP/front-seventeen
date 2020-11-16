import React, {useEffect} from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {backURL} from "../config/config";
import Msi from "./msi";

interface Prop{
    id:number,
    name:string,
    birth:string,
    part:string,
    src:string,
}

const MemberSimple:React.FunctionComponent=()=>{


    return (
        <>
            <Msi />
        </>
    )
}

export default MemberSimple;