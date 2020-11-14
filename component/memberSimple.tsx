import React, {useEffect} from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {backURL} from "../config/config";

interface Prop{
    id:number,
    name:string,
    birth:string,
    part:string,
    src:string,
}

const MemberSimple:React.FunctionComponent=()=>{

    const {members}=useSelector((state:any)=>state.member)

    return (
        <>
            {members.map((member)=>(
                <li>
                    <div>
                        <img src={backURL+"/"+member.src} className="member-simple-img"/>
                        <Link href={"/member/"+member.id}>
                            <a><p>{member.name}</p></a>
                        </Link>
                    </div>
                </li>
            ))}
        </>
    )
}
export default MemberSimple;