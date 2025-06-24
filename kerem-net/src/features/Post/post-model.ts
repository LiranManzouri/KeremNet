import CommentModel from "./Comment/comment-model";

interface PostModel {
    id: number;
    username: string;
    likesCount: number;
    uploadDate: Date;
    text: string;
    comments: CommentModel[];
}

export default PostModel;