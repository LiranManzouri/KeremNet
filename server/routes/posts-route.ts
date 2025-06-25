import express from "express";

import {
    postNewPost,
    deletePostById,
    getAllPosts,
    getPostById,
    putPostById,
    postNewCommentToPost, getCommentsFromPost, getCommentById
} from "../controllers/posts-controller";


const router = express.Router();

router.route('/')
    .post(postNewPost)
    .get(getAllPosts)

router.route('/:id')
    .get(getPostById)
    .delete(deletePostById)
    .put(putPostById)

router.route('/:postId/comments')
    .post(postNewCommentToPost)
    .get(getCommentsFromPost)


router.route('/:postId/comments/:commentId')
    .get(getCommentById)

export default router;