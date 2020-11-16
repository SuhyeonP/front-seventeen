import React, {useCallback, useState} from 'react';
import ImagesZoom from "./imgaesZoom";
import {backURL} from "../config/config";
import {useSelector} from "react-redux";

interface Prop{
    images:{src:string}[]
}

const ImageG: React.FunctionComponent <Prop>= ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false)
    const {loadGoingDone,imagePaths} = useSelector((state:any) => state.going);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, [])

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);
    console.log({images});

    return (
        <>
            {loadGoingDone===true?<div className="going-detail">
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
                <div className="img-zip-zoom">
                    <img className="before-zoom" src={backURL + "/" + images[0].src} alt={backURL + "/" + images[0].src}
                         width="50%" onClick={onZoom}/>
                    <div role="presentation"
                         style={{display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
                         onClick={onZoom} className="moresee-img">
                        {images.length - 1}개의 사진 더보기
                    </div>
                </div>
            </div>:null}
        </>
    )


}

export default ImageG;