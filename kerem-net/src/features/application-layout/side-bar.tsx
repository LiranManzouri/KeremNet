import React, {FC} from "react";

import {Typography, AppBar, Box, Avatar, IconButton, Toolbar} from "@mui/material";
import logo from './logo.png';
import './side-bar.css'

const SideBar: FC = () => {
    return (
        <Box>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton className={'Men'}
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <Avatar src={logo} />
                    </IconButton>
                    <div className={'menu-options'}>
                        <Typography variant="h6">
                            All Posts
                        </Typography>
                        <Typography variant="h6">
                            Add Post
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SideBar;