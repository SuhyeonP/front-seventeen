import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../component/Layout";
import Link from "next/link";

const AboutSeven:React.FunctionComponent=()=>{
    return (
        <>
            <Head>
                <title>About Seventeen</title>
            </Head>
            <AppLayout>
                <div className="seventeen-info">
                    <img src="http://www.pledis.co.kr/_data/file/goodsImages/46be21b35a21f617804fc8fa188de953.jpg" className="seventeen-all"/>
                    <div className="explain-seventeen">
                        <p className="titlee">세븐틴&nbsp;<span>SEVENTEEN</span></p>
                        <p>데뷔&nbsp;:&nbsp;<span>2015년 5월 26일</span></p>
                        <div>
                            세븐틴은 13명의 멤버, 3개의 유닛이 모여 하나의 팀을 이룬다는 의미가 담겨있는 초대형 그룹이다.
                            프리 데뷔 시스템을 도입하여 데뷔 전 트레이닝 과정을 대중에게 모두 공개하는 차별화된 프로모션으로
                            데뷔를 준비한 세븐틴은 2015년 5월 첫 번째 미니 앨범 ‘17 CARAT’으로 가요계에 첫 발을 내딛는 것과
                            동시에 슈퍼루키로 급부상했다.
                            팀 내 세 개의 각기 다른 유닛(힙합팀, 보컬팀, 퍼포먼스팀)이 하나의 그룹에 공존하며
                            자체제작 아이돌이라는 수식어에 걸맞게 각 팀 별로 전반적인 앨범 제작에 참여하고 있다.
                            이에 세븐틴만이 보여줄 수 있는 음악과 퍼포먼스를 통해 데뷔 직후 슈퍼루키, 자체제작돌,
                            청량돌이라는 수식어에서 현재는 국내외를 아우르는 대세돌로서 가요계 속 그들의 입지를 더욱 굳히는 중이다.
                        </div>
                        <Link href="http://www.pledis.co.kr/html/artist/seventeen">
                            <a target="_blank" rel="noreferrer noopener">공식홈페이지</a>
                        </Link>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default AboutSeven;