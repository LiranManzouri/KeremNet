import React, {FC} from "react";
import './post.css';
import {Card, CardContent, CardHeader} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment, {CommentProps} from './Comment/comment';

interface Props {
    username: string;
    likes: number;
    uploadTime: Date;
    text: string;
    comments: CommentProps[];
}

const Post: FC<Props> = (
    {
        username,
        likes,
        uploadTime,
        text,
        comments
    }
) => {

    const date = `${uploadTime.toLocaleTimeString([], {timeStyle: 'short'})}, ${uploadTime.toLocaleDateString()}`;

    return (
        <Card className={'post'}>
            <CardHeader className={'post-creator'}
                        title={username}
                        subheader={date}
            />
            <CardContent className={'text-wrapper'}>
                <div className={'post-text'}>
                    {text}
                </div>
            </CardContent>

            <div className={'post-comments'}>
                <span>Comments:<br/></span>
                <ul className={'comments'}>
                    {comments.map(comment =>
                        <li className={'comment'}>
                            <Comment {...comment}></Comment>
                        </li>)}
                </ul>
            </div>

            <div className={'likes'}>
                {likes}<FavoriteIcon className={'like-icon'}/>
            </div>
        </Card>
    )
};

export default Post;