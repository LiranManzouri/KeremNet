import React, {FC, useState} from "react";
import {Button} from "@mui/material";
import SinglePostDialog from "./single-post-dialog";
import {useNavigate} from "react-router-dom";
import {PostModelArray} from "../../../../../common/models/post-model";

interface Props {
    posts: PostModelArray;
}

const SinglePostButton: FC<Props> = ({posts}) => {
    const [singlePostOpen, setSinglePostOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSinglePostOpen = () => {
        setSinglePostOpen(true);
    }

    const handleSinglePostClosed = (postId: string | undefined) => {
        setSinglePostOpen(false);
        if (postId === undefined) {
            return;
        }
        navigate(`/posts/${postId}`);
    }

    return (
        <>
            <Button sx={{color: 'white'}} onClick={() => handleSinglePostOpen()}>
                Specific Post
            </Button>
            <SinglePostDialog
                open={singlePostOpen}
                onClose={(postId) => handleSinglePostClosed(postId)}
                posts={posts}
            />
        </>
    );
}

export default SinglePostButton;