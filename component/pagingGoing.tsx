import React, {useState} from "react";
import RealTable from "./pageTable";
import {useSelector} from "react-redux";

export interface Prop{
    id:number,
    episode:string,
    title:string,
    html:string,
    explain:string,
    link:string,
    Images:any[],
}

const PagingTable: React.FunctionComponent = () => {

    return (
        <>
            <table className="going-table">
                <thead>
                <tr>
                    <td>&nbsp;</td>
                    <td>회차</td>
                    <td>title</td>
                </tr>
                </thead>
                <tbody>
                <RealTable/>
                </tbody>
            </table>
        </>
    )
}

export default PagingTable;