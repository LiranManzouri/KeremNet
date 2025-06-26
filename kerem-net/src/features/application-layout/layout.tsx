import React, {FC} from "react";
import {Outlet} from "react-router";

import {AppBar, Avatar, IconButton, Toolbar, Button} from "@mui/material";
import logo from './logo.png';
import './layout.css'

const Layout: FC = () => {
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
                        <Button sx={{color: 'white'}}>
                            All Posts
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default Layout;