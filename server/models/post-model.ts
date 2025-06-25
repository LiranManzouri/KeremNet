import Comment from './comment-model'

class Post {
    id: number;
    username: string;
    likesCount: number;
    uploadDate: string;
    text: string;
    comments: Comment[];

    constructor(id, username, likesCount, uploadDate, text, comments) {
        this.id = id;
        this.username = username;
        this.likesCount = likesCount;
        this.uploadDate = uploadDate;
        this.text = text;
        this.comments = comments;
    }
}

export default Post;