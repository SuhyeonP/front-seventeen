import React, {useEffect} from "react";
import {LOAD_MEMBER_REQUEST} from "../../reducers/member";
import AppLayout from "../../component/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

const MemberDetail=()=>{
    const dispatch=useDispatch();
    const router=useRouter();
    const {mem}=(router.query);
    useEffect(()=>{
        dispatch({
            type:LOAD_MEMBER_REQUEST,
            data:Number(mem)
        })
    },[])
    const {member,loadMemberDone}=useSelector((state:any)=>state.member)
    return(
        <>
            <AppLayout>
                <div className="member-section">
                    {loadMemberDone
                        ?
                        <>
                            <h2>{member.name}</h2>
                            <img src={"http://localhost:3065/"+member.src} className="member-img"/>
                            <table>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Birth:</td>
                                    <td>{member.birth}</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Part:</td>
                                    <td>{member.part}</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Test:</td>
                                    <td>developing Now</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Test:</td>
                                    <td>developing Now</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Test:</td>
                                    <td>developing Now</td>
                                </tr>
                            </table>
                        </>
                        :
                        <div>Wait a sec</div>
                    }

                </div>
            </AppLayout>
        </>
    )

}

export default MemberDetail;