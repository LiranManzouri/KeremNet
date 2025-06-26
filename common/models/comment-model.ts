export interface CommentModel {
    id: number;
    content: string;
    publishDate: string;
    creator: string;
}

export interface CommentModelArray {
    [id: string]: CommentModel;
}