import React, {useState} from 'react';
import './app.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Layout from "./features/application-layout/layout";
import HomePage from "./features/home-page/home-page";
import useGetPosts from "./features/home-page/useGetPosts";
import SinglePostPage from "./features/single-post-page/single-post-page"
import LoadingPage from "./features/loading-page/loading-page";
import CustomizedSnackbar from "./features/customized-snackbar";

export interface AlertInfo {
    showAlert: boolean;
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
    alertMessage: string;
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

function App() {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const alertInfo: AlertInfo = {showAlert, setShowAlert, alertMessage, setAlertMessage};

    const [posts, getPosts] = useGetPosts(alertInfo);

    if (posts !== undefined && Object.keys(posts).length === 0) {
        return (
            <LoadingPage/>
        );
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout posts={posts || {}} getPosts={getPosts} alertInfo={alertInfo}/>}>
                        <Route index element={<Navigate to="posts"/>}/>
                        <Route path={'posts'} element={<HomePage posts={posts || {}}/>}/>
                        <Route path={'posts/:postId'} element={<SinglePostPage posts={posts || {}}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            {
                alertInfo.showAlert &&
                <CustomizedSnackbar alertInfo={alertInfo}/>
            }
        </>
    );
}

export default App;
