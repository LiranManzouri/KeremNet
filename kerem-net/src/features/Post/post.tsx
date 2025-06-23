import React, {FC} from "react";
import './post.css'
import like from "../../icons/like.svg"

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
            <div className={'text-wrapper'}>
                <div className={'post-text'}>
                    {text.split('\n').map(line => <span>{line}<br/></span>)}
                </div>
            </div>

            <div className={'post-creator'}>
                <span>{username}</span>
                <span className={'like'}>
                    <span>{likes}</span>
                    <img src={like} className="like-icon" alt="like-icon"/>
                </span>
                <div className={'date'}>
                    <span>{uploadTime.toLocaleTimeString([], {timeStyle: 'short'})}</span>
                    <span>{uploadTime.toLocaleDateString()}</span>
                </div>
            </div>

            <div className={'post-comments'}>
                <span>Comments:<br/></span>
                <ul>
                    {comments.map(comment => <li className={'comment'}>{comment}</li>)}
                </ul>
            </div>

        </div>)
};

export default Post;