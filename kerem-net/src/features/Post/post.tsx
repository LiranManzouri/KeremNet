import React, {FC} from "react";
import './post.css';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from './Comment/comment';
import PostModel from "./post-model";

const Post: FC<Omit<PostModel, "id">> = (
    {
        username,
        likesCount,
        uploadDate,
        text,
        comments
    }
) => {

    const date = `${uploadDate.toLocaleTimeString([], {timeStyle: 'short'})}, ${uploadDate.toLocaleDateString()}`;

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
                        <Comment
                            key={comment.id}
                            {...comment}
                        />
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