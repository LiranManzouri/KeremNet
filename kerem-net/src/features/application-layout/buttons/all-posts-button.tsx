import React, {FC} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface Props {
    getPosts: () => void;
}

const AllPostsButton: FC<Props> = ({getPosts}) => {
    const navigate = useNavigate();

    const allPostsOnClick = () => {
        getPosts();
        navigate('/posts');
    }

    return (
        <Button sx={{color: 'white'}} onClick={() => allPostsOnClick()}>
            All Posts
        </Button>
    );
}

export default AllPostsButton;