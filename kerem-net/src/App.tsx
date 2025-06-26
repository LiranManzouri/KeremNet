import React, {useEffect} from 'react';
import './app.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Layout from "./features/application-layout/layout";
import HomePage from "./features/home-page/home-page";
import useGetPosts from "./features/home-page/useGetPosts";
import SinglePostPage from "./features/single-post-page/single-post-page"
import LoadingPage from "./features/loading-page/loading-page";

function App() {
    const posts = useGetPosts();

    if (posts.length === 0) {
        return (
            <LoadingPage/>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to="posts"/>}/>
                    <Route path={'posts'} element={<HomePage posts={posts}/>}/>
                    <Route path={'posts/:postId'} element={<SinglePostPage posts={posts}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
