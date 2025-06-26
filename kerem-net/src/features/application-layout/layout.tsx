import React, {FC, useState} from "react";
import {Outlet} from "react-router";

import {AppBar, Avatar, IconButton, Toolbar, Button} from "@mui/material";
import logo from './logo.png';
import './layout.css'
import {useNavigate} from "react-router-dom";
import SinglePostDialog from "../single-post-page/SinglePostDialog";
import PostModel from "../../../../common/models/post-model";

interface Props {
    posts: PostModel[];
}

const Layout: FC<Props> = ({posts}) => {

    const navigate = useNavigate();

    const allPostsOnClick = () => {
        navigate('/posts');
    }

    const [singlePostOpen, setSinglePostOpen] = useState<boolean>(false);

    const handleSinglePostOpen = () => {
        setSinglePostOpen(true);
    }

    const handleSinglePostClosed = (postId: string | undefined) => {
        setSinglePostOpen(false);
        if (postId === undefined) {
            return;
        }
        navigate(`/posts/${postId}`);
    }

    return (
        <>
            <AppBar className={'side-bar'} position={"static"}>
                <Toolbar>
                    <IconButton className={'Menu'}
                                edge="start"
                                color="inherit"
                                sx={{mr: 2}}
                    >
                        <Avatar src={logo}/>
                    </IconButton>
                    <div className={'menu-options'}>
                        <Button sx={{color: 'white'}} onClick={() => allPostsOnClick()}>
                            All Posts
                        </Button>
                        <Button sx={{color: 'white'}} onClick={() => handleSinglePostOpen()}>
                            Specific Post
                        </Button>
                        <SinglePostDialog
                            open={singlePostOpen}
                            onClose={(postId) => handleSinglePostClosed(postId)}
                            posts={posts}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default Layout;