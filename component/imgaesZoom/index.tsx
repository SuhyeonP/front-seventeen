import React, { useState } from 'react';
import Slick from 'react-slick';
import { Overlay, Header, CloseBtn, ImgWrapper, Indicator, Global } from './styles';
import {backURL} from "../../config/config";

interface Prop{
    images:{src:string}[],
    onClose:()=>void
}


const ImagesZoom = ({ images, onClose }:Prop) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Overlay className="tab-pc">
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose} />
            </Header>
            <div className="slickwrapper">
                <div>
                    <Slick
                        initialSlide={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v) => (
                            <ImgWrapper key={v.src}>
                                <img src={backURL+v.src} alt={backURL+v.src} />
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </div>
        </Overlay>
    );
};

export default ImagesZoom;