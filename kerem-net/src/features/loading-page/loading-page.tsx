import React, {FC} from "react";
import './loading-page.css'
import {Typography} from "@mui/material";

const LoadingPage: FC = () => {
    return (
        <div className={'loading'}>
            <Typography sx={{color: 'red', fontSize: '4rem'}}>Loading...</Typography>
            <progress value={undefined}></progress>
        </div>
    );
}

export default LoadingPage;