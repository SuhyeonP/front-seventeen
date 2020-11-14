import React from 'react';
import Link from "next/link";

const Footer:React.FunctionComponent=()=>{
    return (
        <footer>
            <p>
                Made by
                <Link href="https://www.instagram.com/honey_hyeoni/">
                    <a target="_blank" rel="noreferrer noopener">@honey_hyeoni</a>
                </Link>
            </p>
            <p>오류 및 잘못된 정보는 DM주세효</p>
        </footer>
    )
}

export default Footer;