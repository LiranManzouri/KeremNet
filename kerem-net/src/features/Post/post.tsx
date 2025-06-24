import React, {FC} from "react";
import './post.css';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from './Comment/comment';
import CommentModel from "./Comment/CommentModel";

interface Props {
    username: string;
    likesCount: number;
    uploadTime: Date;
    text: string;
    comments: CommentModel[];
}

const Post: FC<Props> = (
    {
        username,
        likesCount,
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
                <Typography className={'post-text'}>
                    {text}
                </Typography>
            </CardContent>

            <div className={'post-comments'}>
                <Typography>{'Comments:'}</Typography>
                <ol className={'comments'}>
                    {comments.map(comment =>
                        <Comment {...comment}/>
                    )}
                </ol>
            </div>

            <div className={'likes'}>
                {likesCount}<FavoriteIcon className={'like-icon'}/>
            </div>
        </Card>
    )
};

export default Post;