import {PostModel, PostModelArray} from '../../common/models/post-model';

enum StatusCodes {
    SUCCESS,
    POST_ERROR,
    COMMENT_ERROR
}

const messages = {
    [StatusCodes.SUCCESS]: 'Success',
    [StatusCodes.POST_ERROR]: 'No such post',
    [StatusCodes.COMMENT_ERROR]: 'No such comment'
};

class PostsController {
    posts: PostModelArray;

    constructor() {
        try {
            const loadPosts = async () => {
                this.posts = (await import('../posts.json')).default;
            }
            loadPosts();
        } catch (e) {
            console.log('Error reading the posts.json');
        }
    }

    _isPostExists = (postId: string): StatusCodes => {
        if (!(postId in this.posts)) {
            return StatusCodes.POST_ERROR;
        }
        return StatusCodes.SUCCESS;
    }

    _getPost = (postId: string): PostModel => {
        return this.posts[postId];
    }

    _isCommentExists = (postId: string, commentId: string): StatusCodes => {
        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            return StatusCodes.POST_ERROR;
        }
        const post = this._getPost(postId);
        if (!(commentId in post.comments)) {
            return StatusCodes.COMMENT_ERROR;
        }
        return StatusCodes.SUCCESS;
    }

    _getComment = (postId: string, commentId: string) => {
        const post = this._getPost(postId);
        return post.comments[commentId];
    }

    postNewPost = (req, res) => {
        const {username, uploadDate, text} = req.body;
        const postsCount = Object.keys(this.posts).length;
        const lastPostId = Object.keys(this.posts)[postsCount - 1];
        const nextId = Number(lastPostId) + 1;
        this.posts[String(nextId)] = {
            id: nextId,
            username: username,
            likesCount: 0,
            uploadDate: uploadDate,
            text: text,
            comments: {}
        };
        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }

    getAllPosts = (req, res) => {
        res.status(200).json({...this.posts});
    }

    getPostById = (req, res) => {
        const postId = req.params.postId;
        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }
        res.status(200).json(this._getPost(postId));
    }

    deletePostById = (req, res) => {
        const postId = req.params.postId;
        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }
        delete this.posts[postId];
        res.status(200).send(StatusCodes.SUCCESS);
    }

    getCommentsFromPost = (req, res) => {
        const postId = req.params.postId;

        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }
        res.status(200).json(this._getPost(postId).comments);
    }

    postNewCommentToPost = (req, res) => {
        const postId = req.params.postId;
        const {content, publishDate, creator} = req.body;

        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }

        const post = this._getPost(postId);
        const commentsCount = Object.keys(post.comments).length;
        const lastCommentId = Object.keys(post.comments)[commentsCount - 1];
        const nextId = Number(lastCommentId) + 1;
        post.comments[String(nextId)] = {
            id: nextId,
            content: content,
            publishDate: publishDate,
            creator: creator
        };
        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }

    getCommentById = (req, res) => {
        const postId = req.params.postId;
        const commentId = req.params.commentId;

        const isCommentExists = this._isCommentExists(postId, commentId);
        if (isCommentExists !== StatusCodes.SUCCESS) {
            res.status(400).send(messages[isCommentExists]);
            return;
        }

        res.status(200).json(this._getComment(postId, commentId));
    }

    deleteCommentById = (req, res) => {
        const postId = req.params.postId;
        const commentId = req.params.commentId;


        const isCommentExists = this._isCommentExists(postId, commentId);
        if (isCommentExists !== StatusCodes.SUCCESS) {
            res.status(400).send(messages[isCommentExists]);
            return;
        }

        const post = this._getPost(postId);
        delete post.comments[commentId];
        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }
}

export default PostsController;