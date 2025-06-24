import React, {useCallback, useEffect, useState} from 'react';
import Post from "./features/Post/post";
import './app.css';
import PostModel from "./features/Post/post-model";
import CommentModel from "./features/Post/Comment/comment-model";

function App() {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        const getPosts = async () => {
            const postsRequest = await fetch(
                "http://localhost:5000/posts",
                {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );

            const postsReceived = await postsRequest.json();
            const correctPost = postsReceived.map((post: { uploadDate: string, comments: CommentModel[] }) => {
                    const {uploadDate, comments, ...newPost} = post;
                    Object.assign(newPost, {uploadDate: new Date(uploadDate)});
                    Object.assign(newPost, {
                        comments: post.comments.map(comment => {
                            const {publishDate, ...newComment} = comment;
                            Object.assign(newComment, {publishDate: new Date(comment.publishDate)});
                            return newComment;
                        })
                    });
                    return newPost;
                }
            )
            setPosts(correctPost);
        }

        getPosts().catch(e => alert(e));

    }, []);


    return (
        <div className={'app'}>
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

export default App;
