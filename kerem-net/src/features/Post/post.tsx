import React, {FC} from "react";
import './post.css';
import {Card, CardContent, CardHeader} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from './Comment/comment';
import PostModel from "./post-model";

const Post: FC<Omit<PostModel, "id">> = (
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
                <div className={'post-text'}>
                    {text}
                </div>
            </CardContent>

            <div className={'post-comments'}>
                <span>Comments:<br/></span>
                <ul className={'comments'}>
                    {comments.map(comment =>
                        <Comment
                            key={comment.id}
                            {...comment}
                        />
                    )}
                </ul>
            </div>

            <div className={'likes'}>
                {likesCount}<FavoriteIcon className={'like-icon'}/>
            </div>
        </Card>
    )
};

export default Post;