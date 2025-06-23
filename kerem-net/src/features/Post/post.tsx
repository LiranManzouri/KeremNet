import React, {FC} from "react";

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

    return (
        <div className={'post'}>

            <div className={'post-creator'}>
                <span>{username}</span>
                <span>{likes}</span>
                <span>{uploadTime.toLocaleDateString()}</span>
            </div>

            <div className={'post-text'}>
                {text}
            </div>

            <div className={'post-comments'}>
                <ul>
                    {comments.map(comment => <li className={'comment'}>{comment}</li>)}
                </ul>
            </div>

        </div>)
};

export default Post;