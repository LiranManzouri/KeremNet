import express from "express";
import PostsController from "../controllers/posts-controller";

const router = express.Router();
const postsController = new PostsController();

router.route('/')
    .get(postsController.getAllPosts)
    .post(postsController.postNewPost)

router.route('/:postId')
    .get(postsController.getPostById)
    .delete(postsController.deletePostById)

router.route('/:postId/comments')
    .get(postsController.getCommentsFromPost)
    .post(postsController.postNewCommentToPost)


router.route('/:postId/comments/:commentId')
    .get(postsController.getCommentById)
    .delete(postsController.deleteCommentById)

export default router;