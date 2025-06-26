import React, {FC} from "react";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import './comment.css';
import {Typography} from "@mui/material";
import {CommentModel} from "../../../../../common/models/comment-model";

const Comment: FC<Omit<CommentModel, "id">> = ({content, publishDate, creator}) => {
    const date = new Date(publishDate);
    const dateToShow = `${date.toLocaleTimeString([], {timeStyle: 'short'})}, ${date.toLocaleDateString()}`;

    return (
        <div className={'comment-info'}>
            <CommentOutlinedIcon className={'comment-icon'} sx={{width: '2vmin'}}/>
            <div className={'comment-details'}>
                <div className={'comment-publish-info'}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>{creator}</Typography>
                    <Typography fontSize={"0.8rem"}>{dateToShow}</Typography>
                </div>
                <Typography fontSize={"0.8rem"}>{content}</Typography>
            </div>
        </div>
    );
}

export default Comment;