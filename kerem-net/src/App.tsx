import React from 'react';
import Post from "./features/Post/post";
import './app.css'
import postsJson from './posts.json'


function App() {

    const posts = postsJson.posts;

    return (
        <div className={'app'}>
            {
                posts.map(post =>
                    <Post username={post.username}
                          likesCount={post.likes}
                          uploadTime={new Date(post.uploadDate)}
                          text={post.text}
                          comments={post.comments.map(comment => {
                              return {...comment, publishDate: new Date(comment.publishDate)};
                          })}
                    ></Post>)
            }
        </div>
    );
}

export default App;
