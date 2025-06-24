import React, {FC} from "react";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import './comment.css';

export interface CommentProps {
    content: string;
    publishDate: Date;
    creator: string;
}

const Comment: FC<CommentProps> = ({content, publishDate, creator}) => {
    const date = `${publishDate.toLocaleTimeString([], {timeStyle: 'short'})}, ${publishDate.toLocaleDateString()}`;

    return (
        <div className={'comment-info'}>
            <CommentOutlinedIcon className={'comment-icon'}></CommentOutlinedIcon>
            <div className={'comment-details'}>
                <div className={'comment-publish-info'}>
                    <span className={'comment-creator'}>{creator}</span>
                    <span className={'comment-publish-date'}>{date}</span>
                </div>
                <span className={'comment-content'}>{content}</span>
            </div>
        </div>
    );
}

export default Comment;