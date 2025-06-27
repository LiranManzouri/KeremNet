import React, {FC, useState} from "react";
import {Button} from "@mui/material";
import AddPostDialog from "./add-post-dialog";
import {AlertInfo} from "../../../App";

interface Props {
    getPosts: () => void;
    alertInfo: AlertInfo;
}

const AddPostButton: FC<Props> = ({getPosts, alertInfo}) => {
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
                alertInfo={alertInfo}
            />
        </>
    );
}

export default AddPostButton;