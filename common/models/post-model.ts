import {CommentModelArray} from "./comment-model";

export interface PostModel {
    id: number;
    username: string;
    likesCount: number;
    uploadDate: string;
    text: string;
    comments: CommentModelArray;
}

export interface PostModelArray {
    [id: string]: PostModel;
}