import React, {FC} from "react";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import './comment.css';
import CommentModel from "./comment-model";
import {Typography} from "@mui/material";

const Comment: FC<Omit<CommentModel, "id">> = ({content, publishDate, creator}) => {
    const date = new Date(publishDate);
    const dateToShow = `${date.toLocaleTimeString([], {timeStyle: 'short'})}, ${date.toLocaleDateString()}`;

    return (
        <div className={'comment-info'}>
            <CommentOutlinedIcon className={'comment-icon'}/>
            <div className={'comment-details'}>
                <div className={'comment-publish-info'}>
                    <Typography className={'creator'}>{creator}</Typography>
                    <Typography className={'publish-date'}>{dateToShow}</Typography>
                </div>
                <Typography className={'comment-content'}>{content}</Typography>
            </div>
        </div>
    );
}

export default Comment;