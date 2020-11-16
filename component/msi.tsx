import *as React from 'react'
import Link from "next/link";
import {useSelector} from "react-redux";


const Msi:React.FC=()=>{



    const {members}=useSelector((state:any)=>state.member)
    return (
        <>
            {members.map((element)=>(
                <li>
                    <div>
                        <img src={element.img} className="member-simple-img wht"/>
                        <Link href={"/member/" + element.id}>
                            <a><p>{element.name}</p></a>
                        </Link>
                    </div>
                </li>
            ))}
        </>
    )
}

export default Msi;