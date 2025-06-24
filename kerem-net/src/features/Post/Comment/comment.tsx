import React, {FC} from "react";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import './comment.css';
import CommentModel from "./comment-model";

const Comment: FC<Omit<CommentModel, "id">> = ({content, publishDate, creator}) => {
    const date = `${publishDate.toLocaleTimeString([], {timeStyle: 'short'})}, ${publishDate.toLocaleDateString()}`;

    return (
        <div className={'comment-info'}>
            <CommentOutlinedIcon className={'comment-icon'}/>
            <div className={'comment-details'}>
                <div className={'comment-publish-info'}>
                    <span>{creator}</span>
                    <span>{date}</span>
                </div>
                <span className={'comment-content'}>{content}</span>
            </div>
        </div>
    );
}

export default Comment;