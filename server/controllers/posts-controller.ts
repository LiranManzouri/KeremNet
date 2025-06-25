import Post from '../models/post-model'

const postNewPost = async (req, res) => {
    const {username, uploadDate, text} = req.body;

    const newPost = new Post({
        username: username,
        likesCount: 0,
        uploadDate: uploadDate,
        text: text,
        comments: []
    });

    await newPost.save();
    await res.status(200).json();
}

const getAllPosts = (req, res) => {

}

const getPostById = (req, res) => {
}

const deletePostById = (req, res) => {

}

const putPostById = (req, res) => {
}

const getCommentsFromPost = (req, res) => {

}

const postNewCommentToPost = (req, res) => {
}

const getCommentById = (req, res) => {
}

export {
    postNewPost,
    getAllPosts,
    getPostById,
    deletePostById,
    putPostById,
    postNewCommentToPost,
    getCommentsFromPost,
    getCommentById
}