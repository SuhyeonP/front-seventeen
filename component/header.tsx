import React from 'react';
import Link from "next/link";
const Header:React.FunctionComponent=()=>{
    return (
        <>
            <header>
                <Link href="/">
                    <a><h2>Seventeen Right Here.</h2></a>
                </Link>
            </header>
        </>
    )
}
export default Header;