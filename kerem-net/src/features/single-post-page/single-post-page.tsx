import React, {FC, useEffect, useState} from "react";
import PostModel from "../../../../common/models/post-model";
import Post from "../post/post";
import {useNavigate, useParams} from "react-router-dom";

import './single-post-page.css';
import {Typography} from "@mui/material";

interface Props {
    posts: PostModel[]
}

const SinglePostPage: FC<Props> = ({posts}) => {
    const params = useParams();
    const postId = Number(params.postId);
    const isExists = posts.some(post => post.id === postId);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isExists) {
            const timerId = setTimeout(() => {
                navigate('/posts');
            }, 3000);
            return () => clearInterval(timerId);
        }
    }, [navigate]);

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

    const {id, ...post} = {...posts.find(p => p.id === postId) as PostModel};

    return (
        <div className={'single-post-page'}>
            <Post {...post}/>
        </div>
    );
}

export default SinglePostPage;