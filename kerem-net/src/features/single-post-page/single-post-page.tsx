import React, {FC, useEffect} from "react";
import {PostModelArray} from "../../../../common/models/post-model";
import Post from "../post/post";
import {useNavigate, useParams} from "react-router-dom";

import './single-post-page.css';
import {Typography} from "@mui/material";

interface Props {
    posts: PostModelArray
}

const SinglePostPage: FC<Props> = ({posts}) => {
    const params = useParams();
    const postId = params.postId;
    const isExists = postId !== undefined && postId in posts;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isExists) {
            const timerId = setTimeout(() => {
                navigate('/posts');
            }, 3000);
            return () => clearInterval(timerId);
        }
    }, [navigate, isExists]);

    if (!isExists) {
        return (
            <div className={'single-post-page'}>
                <Typography sx={{color: 'red', fontSize: '3rem'}}>
                    POST DOESN'T EXISTS
                </Typography>
                <Typography sx={{color: 'red', fontSize: '2rem'}}>
                    Redirects to home page
                </Typography>
                <progress value={undefined}></progress>
            </div>
        );
    }

    const {id, ...post} = {...posts[postId]};

    return (
        <div className={'single-post-page'}>
            <Post key={id} {...post}/>
        </div>
    );
}

export default SinglePostPage;