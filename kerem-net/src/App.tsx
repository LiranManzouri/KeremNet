import React from 'react';
import './app.css';
import SideBar from "./features/application-layout/side-bar";
import HomePage from "./features/home-page/home-page";

function App() {
    return (
        <>
            <SideBar/>
            <HomePage/>
        </>
    );
}

export default App;
