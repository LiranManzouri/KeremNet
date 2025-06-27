import React, {FC} from "react";
import {Outlet} from "react-router";

import {AppBar, Avatar, IconButton, Toolbar} from "@mui/material";
import logo from './logo.png';
import './layout.css';
import {PostModelArray} from "../../../../common/models/post-model";
import AllPostsButton from "./buttons/all-posts-button";
import SinglePostButton from "./buttons/single-post-button";
import AddPostButton from "./buttons/add-post-button";
import {AlertInfo} from "../../App";

interface Props {
    posts: PostModelArray;
    getPosts: () => void;
    alertInfo: AlertInfo;
}

const Layout: FC<Props> = ({posts, getPosts, alertInfo}) => {
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
                        <AllPostsButton getPosts={getPosts}/>
                        <SinglePostButton posts={posts}/>
                        <AddPostButton getPosts={getPosts} alertInfo={alertInfo}/>
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default Layout;