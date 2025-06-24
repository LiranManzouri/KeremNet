import React from 'react';
import Post from "./features/Post/post";
import './app.css'
import {CommentProps} from "./features/Post/Comment/comment";

function App() {
    const username: string = 'Liran';
    const likes: number = 6;
    const uploadDate: Date = new Date();
    const text: string = 'This is my text!\n\nLorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus' +
        ' blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique' +
        ' volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim' +
        ' molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.\n\n' +
        'Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum' +
        ' orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,' +
        ' eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.' +
        ' Interdum praesent ut penatibus fames eros ad consectetur sed.';

    const comments: CommentProps[] = [
        {
            content: 'Wow',
            creator: 'Ido',
            publishDate: new Date(new Date().setHours(8))
        },
        {
            content: 'Wow',
            creator: 'Ido',
            publishDate: new Date(new Date().setHours(13))
        }
    ]

    return (
        <div className={'app'}>
            <Post username={username}
                  likes={likes}
                  uploadTime={uploadDate}
                  text={text}
                  comments={comments}></Post>
        </div>
    );
}

export default App;
