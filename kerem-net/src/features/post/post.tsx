import React, {FC} from "react";
import './post.css';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from './comment/comment';
import PostModel from "../../../../common/models/post-model";

const Post: FC<Omit<PostModel, "id">> = (
    {
        username,
        likesCount,
        uploadDate,
        text,
        comments
    }
) => {
    const date = new Date(uploadDate);
    const dateToShow = `${date.toLocaleTimeString([], {timeStyle: 'short'})}, ${date.toLocaleDateString()}`;

    return (
        <Card className={'post'} sx={{borderRadius: '30px'}}>
            <CardHeader className={'post-creator'}
                        title={username}
                        subheader={dateToShow}
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
                {likesCount}<FavoriteIcon className={'like-icon'} sx={{width: '2vmin'}}/>
            </div>
        </Card>
    )
};

export default Post;