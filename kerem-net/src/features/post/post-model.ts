import CommentModel from "./comment/comment-model";

interface PostModel {
    id: number;
    username: string;
    likesCount: number;
    uploadDate: string;
    text: string;
    comments: CommentModel[];
}

export default PostModel;