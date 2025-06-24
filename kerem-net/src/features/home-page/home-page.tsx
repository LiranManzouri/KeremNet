import React, {FC} from "react";
import Post from "../post/post";
import './home-page.css'
import useGetPosts from "./useGetPosts";

const HomePage: FC = () => {

    const posts = useGetPosts();

    return (
        <div className={'home-page'}>
            {
                posts.map(post =>
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