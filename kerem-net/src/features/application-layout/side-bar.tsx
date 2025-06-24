import React, {FC} from "react";

import {Typography, AppBar, Box, Avatar, IconButton, Toolbar, Button} from "@mui/material";
import logo from './logo.png';
import './side-bar.css'

const SideBar: FC = () => {
    return (
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
                    <Button sx={{color: 'white'}}>
                        All Posts
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default SideBar;