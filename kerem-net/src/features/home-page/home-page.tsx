import React, {FC} from "react";
import Post from "../post/post";
import './home-page.css'
import {PostModelArray} from '../../../../common/models/post-model';

interface Props {
    posts: PostModelArray
}

const HomePage: FC<Props> = ({posts}) => {
    return (
        <div className={'home-page'}>
            {
                Object.values(posts).map(post =>
                    <Post
                        key={post.id}
                        username={post.username}
                        likesCount={post.likesCount}
                        uploadDate={post.uploadDate}
                        text={post.text}
                        comments={post.comments}
                    />)
            }
        </div>
    );
}


export default HomePage;