import React, {useCallback, useEffect, useRef} from "react";
import Head from "next/head";
import AppLayout from "../../component/Layout";
import {useDispatch,useSelector} from "react-redux";
import {END} from 'redux-saga'
import useInput from "../../hooks/useInput";
import {
    LOGIN_ADMIN_REQUEST,
    LOGOUT_ADMIN_REQUEST,
    loginAction,
    logoutAction,
    LOAD_ADMIN_REQUEST
} from "../../reducers/admin";
import {addGoing, POST_GOING_REQUEST, UPLOAD_IMAGES_REQUEST} from "../../reducers/going";
import {Button, Form} from 'antd';
import wrapper from "../../store/configureStore";
import axios from "axios";


const Album:React.FunctionComponent=()=>{
    const dispatch=useDispatch();
    const [userId,onChangeAdminId]=useInput('')
    const [password,onChangeAdminPw]=useInput('')
    const [title,onChangeTitle]=useInput('')
    const [episode,onChangeEpisode]=useInput('')
    const [link,onChangeLink]=useInput('')
    const [explain,onChangeExplain]=useInput('')
    const [when,onChangeWhen]=useInput('')
    const imageInput = useRef(null);
    const {me,logInLoading,logInError}=useSelector((state:any)=>state.admin)
    const {imagePaths}=useSelector((state:any)=>state.going)
    const [dday,onChangeDay]=useInput('')

    const onChangeImages=useCallback((e)=>{
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        dispatch({
            type:UPLOAD_IMAGES_REQUEST,
            data:imageFormData,
        })
    },[])
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

    const onSubmitForm=useCallback(()=>{
        dispatch(loginAction({userId,password}))
    },[userId,password])

    const onLogout=useCallback(()=>{
        dispatch(logoutAction())
    },[])

    const onSubmitGoing = useCallback(() => {
        const formData=new FormData();
        imagePaths.forEach((i) => {
            formData.append('image', i);
        });
        formData.append('title',title)
        formData.append('episode',episode)
        formData.append('link',link)
        formData.append('explain',explain)
        formData.append('when',when)
        formData.append('dday',dday)
        return dispatch({
            type:POST_GOING_REQUEST,
            data:formData,
        });
    }, [title,episode,link,explain,when,dday]);

    useEffect(()=>{
        dispatch({
            type:LOAD_ADMIN_REQUEST
        })
    },[])



    return (
        <>
            <Head>
                <title>Admin SH</title>
            </Head>
            <AppLayout>
                <div className="admini">
                    <div className="admin-sh">
                        {logInLoading?<p>wait</p>:null}
                        {me?<button onClick={onLogout}>logout</button>:
                            <Form className="antd-input" onFinish={onSubmitForm}>
                                <input name="adminId" placeholder="id" type="text" value={userId} onChange={onChangeAdminId}/>
                                <input name="adminPw" placeholder="pw" type="password" value={password} onChange={onChangeAdminPw}/>
                                <Button className="loginbtn" htmlType="submit">로그인</Button>
                            </Form>
                        }

                    </div>
                    <br/>
                    <div className="input-going">
                        {me?<Form className="antd-input" encType="multipart/form-data" onFinish={onSubmitGoing}>
                            <input type="text" onChange={onChangeTitle} value={title} placeholder="제목"/>
                            <input type="text" onChange={onChangeEpisode} value={episode} placeholder="n화,n화"/>
                            <input type="text" onChange={onChangeLink} value={link} placeholder="유튜브링크"/>
                            <input type="text" onChange={onChangeWhen} value={when} placeholder="방영일"/>
                            <input type="text" onChange={onChangeExplain} value={explain} placeholder="설명"/>
                            <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages}/>
                            <input type="date" onChange={onChangeDay} value={dday} />
                            <button onClick={onClickImageUpload}>asdf</button>
                            <div className="uploadwrite">
                                <button type="submit">글쓰기</button>
                            </div>
                        </Form>:null}
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export const getServerSideProps=wrapper.getServerSideProps(async(context)=>{
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type:LOAD_ADMIN_REQUEST
    })
    context.store.dispatch(END);
})

export default Album;