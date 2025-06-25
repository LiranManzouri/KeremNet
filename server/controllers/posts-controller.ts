import Post from '../models/post-model';
import Comment from "../models/comment-model";

class PostsController {
    posts: Post[];

    constructor() {
        this.posts = [{
            "id": 1,
            "username": "Liran",
            "likesCount": 6,
            "uploadDate": "2018-01-10T08:14",
            "text": "This is my text!\n\nLorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.\n\n Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies. Interdum praesent ut penatibus fames eros ad consectetur sed.",
            "comments": [
                {
                    "id": 1,
                    "content": "Very very long comment that has zero point but needs to prove a point of overflow !!!",
                    "publishDate": "2021-04-14T15:22",
                    "creator": "Ido"
                },
                {
                    "id": 2,
                    "content": "Wow",
                    "publishDate": "2019-06-07T00:01",
                    "creator": "Ido"
                }
            ]
        }, {
            "id": 2,
            "username": "Zoey",
            "likesCount": 66,
            "uploadDate": "2025-06-23T18:05",
            "text": "This is my text!\n\nLorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.\n\n Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies. Interdum praesent ut penatibus fames eros ad consectetur sed.",
            "comments": [
                {
                    "id": 3,
                    "content": "this is the best comment",
                    "creator": "Ido222",
                    "publishDate": "2021-04-14T12:27"
                },
                {
                    "id": 4,
                    "content": "Second best comment",
                    "creator": "Roey",
                    "publishDate": "2018-01-10T08:14"
                }
            ]
        }];
    }

    _isPostExists = (postId: number) => {
        return this.posts.some(post => post.id === postId);
    }

    _getPost = (postId: number) => {
        return this.posts.find(post => post.id === postId);
    }

    _isCommentExists = (postId: number, commentId: number) => {
        const post = this._getPost(postId);
        return post.comments.some(comment => comment.id === commentId);
    }
    _getComment = (postId: number, commentId: number) => {
        const post = this._getPost(postId);
        return post.comments.find(comment => comment.id === commentId);
    }

    postNewPost = (req, res) => {
        const {username, uploadDate, text} = req.body;
        const nextId = this.posts[this.posts.length - 1].id + 1;
        const newPost = new Post(nextId, username, 0, uploadDate, text, []);
        this.posts.push(newPost);
        res.status(200);
    }

    getAllPosts = (req, res) => {
        res.status(200).json([...this.posts]);
    }

    getPostById = (req, res) => {
        const postId: number = Number(req.params.postId);
        if (this._isPostExists(postId)) {
            res.status(200).json(this._getPost(postId));
        } else {
            res.status(400).send('No such post!');
        }
    }

    deletePostById = (req, res) => {
        const postId: number = Number(req.params.postId);
        if (this._isPostExists(postId)) {
            const indexToDelete = this.posts.indexOf(this._getPost(postId));
            this.posts = this.posts.splice(indexToDelete, 1);
            res.status(200);
        } else {
            res.status(400).send('No such post!');
        }
    }

    getCommentsFromPost = (req, res) => {
        const postId: number = Number(req.params.postId);

        if (this._isPostExists(postId)) {
            res.status(200).json(this._getPost(postId).comments);
        } else {
            res.status(400).send('No such post!');
        }
    }

    postNewCommentToPost = (req, res) => {
        const postId: number = Number(req.params.postId);
        const {content, publishDate, creator} = req.body;

        if (this._isPostExists(postId)) {
            const post = this._getPost(postId);
            const nextId: number = post.comments[post.comments.length - 1].id + 1;
            const newComment = new Comment(nextId, content, publishDate, creator);
            post.comments.push(newComment);
            res.status(200);
        } else {
            res.status(400).send('No such post!');
        }
    }

    getCommentById = (req, res) => {
        const postId: number = Number(req.params.postId);
        const commentId: number = Number(req.params.commentId);
        if (this._isPostExists(postId)) {
            if (this._isCommentExists(postId, commentId)) {
                res.status(200).json(this._getComment(postId, commentId));
            } else {
                res.status(400).send('No such comment!');
            }
        } else {
            res.status(400).send('No such post!');
        }
    }

    deleteCommentById = (req, res) => {
        const postId: number = Number(req.params.postId);
        const commentId: number = Number(req.params.commentId);
        if (this._isPostExists(postId)) {
            if (this._isCommentExists(postId, commentId)) {
                const post = this._getPost(postId);
                const indexToDelete = post.comments.indexOf(this._getComment(postId, commentId));
                post.comments = post.comments.splice(indexToDelete, 1);
                res.status(200);
            } else {
                res.status(400).send('No such comment!');
            }
        } else {
            res.status(400).send('No such post!');
        }
    }
}

export default PostsController;