import React, {FC} from "react";
import './post.css';
import like from "../../icons/like.svg";
import {Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

interface Props {
    username: string;
    likes: number;
    uploadTime: Date;
    text: string;
    comments: string[];
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
                    {text.split('\n').map(line => <Typography>{line}</Typography>)}
                </div>
            </CardContent>

            <div className={'post-comments'}>
                <span>Comments:<br/></span>
                <ul className={'comments'}>
                    {comments.map(comment =>
                        <li className={'comment'}>
                            <>
                                <CommentOutlinedIcon className={'comment-icon'}></CommentOutlinedIcon>
                                {comment}
                            </>
                        </li>)}
                </ul>
            </div>

            <div className={'likes'}>
                16<FavoriteIcon className={'like-icon'}/>
            </div>
        </Card>
)
};

export default Post;