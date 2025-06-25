import Post from '../../common/models/post-model';
import Comment from '../../common/models/comment-model';

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
    posts: Post[];

    constructor() {
        try {
            const loadPosts = async () => {
                this.posts = (await import('../posts.json')).default;
            }
            loadPosts();
        } catch (e) {
            alert(e);
        }
    }

    _isPostExists = (postId: number): StatusCodes => {
        if (!this.posts.some(post => post.id === postId)) {
            return StatusCodes.POST_ERROR;
        }
        return StatusCodes.SUCCESS;
    }

    _getPost = (postId: number): Post => {
        return this.posts.find(post => post.id === postId);
    }

    _isCommentExists = (postId: number, commentId: number): StatusCodes => {
        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            return StatusCodes.POST_ERROR;
        }
        const post = this._getPost(postId);
        if (!post.comments.some(comment => comment.id === commentId)) {
            return StatusCodes.COMMENT_ERROR;
        }
        return StatusCodes.SUCCESS;
    }

    _getComment = (postId: number, commentId: number) => {
        const post = this._getPost(postId);
        return post.comments.find(comment => comment.id === commentId);
    }

    postNewPost = (req, res) => {
        const {username, uploadDate, text} = req.body;
        const nextId = this.posts[this.posts.length - 1].id + 1;
        const newPost: Post = {
            id: nextId,
            username: username,
            likesCount: 0,
            uploadDate: uploadDate,
            text: text,
            comments: []
        };
        this.posts.push(newPost);
        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }

    getAllPosts = (req, res) => {
        res.status(200).json([...this.posts]);
    }

    getPostById = (req, res) => {
        const postId: number = Number(req.params.postId);
        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }
        res.status(200).json(this._getPost(postId));
    }

    deletePostById = (req, res) => {
        const postId: number = Number(req.params.postId);
        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }
        const indexToDelete = this.posts.indexOf(this._getPost(postId));
        this.posts = this.posts.splice(indexToDelete, 1);
        res.status(200).send(StatusCodes.SUCCESS);
    }

    getCommentsFromPost = (req, res) => {
        const postId: number = Number(req.params.postId);

        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }
        res.status(200).json(this._getPost(postId).comments);
    }

    postNewCommentToPost = (req, res) => {
        const postId: number = Number(req.params.postId);
        const {content, publishDate, creator} = req.body;

        if (this._isPostExists(postId) === StatusCodes.POST_ERROR) {
            res.status(400).send(messages[StatusCodes.POST_ERROR]);
            return;
        }

        const post = this._getPost(postId);
        const nextId: number = post.comments[post.comments.length - 1].id + 1;
        const newComment: Comment = {
            id: nextId,
            content: content,
            publishDate: publishDate,
            creator: creator
        };
        post.comments.push(newComment);
        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }

    getCommentById = (req, res) => {
        const postId: number = Number(req.params.postId);
        const commentId: number = Number(req.params.commentId);

        const isCommentExists = this._isCommentExists(postId, commentId);
        if (isCommentExists !== StatusCodes.SUCCESS) {
            res.status(400).send(messages[isCommentExists]);
            return;
        }

        res.status(200).json(this._getComment(postId, commentId));
    }

    deleteCommentById = (req, res) => {
        const postId: number = Number(req.params.postId);
        const commentId: number = Number(req.params.commentId);


        const isCommentExists = this._isCommentExists(postId, commentId);
        if (isCommentExists !== StatusCodes.SUCCESS) {
            res.status(400).send(messages[isCommentExists]);
            return;
        }

        const post = this._getPost(postId);
        const indexToDelete = post.comments.indexOf(this._getComment(postId, commentId));
        post.comments = post.comments.splice(indexToDelete, 1);
        res.status(200).send(messages[StatusCodes.SUCCESS]);
    }
}

export default PostsController;