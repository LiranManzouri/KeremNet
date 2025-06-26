import React, {FC, useState} from "react";
import {PostModelArray} from "../../../../../common/models/post-model";
import {Button} from "@mui/material";
import AddPostDialog from "./add-post-dialog";

interface Props {
    posts: PostModelArray;
    getPosts: () => void;
}

const AddPostButton: FC<Props> = ({posts, getPosts}) => {
    const [addPostOpen, setAddPostOpen] = useState<boolean>(false);

    const handleAddPostOpen = () => {
        setAddPostOpen(true);
    }

    const handleAddPostClosed = () => {
        setAddPostOpen(false);
        getPosts();
    }

    return (
        <>
            <Button sx={{color: 'white'}} onClick={() => handleAddPostOpen()}>
                Add Post
            </Button>
            <AddPostDialog
                open={addPostOpen}
                onClose={() => handleAddPostClosed()}
                posts={posts}
            />
        </>
    );
}

export default AddPostButton;