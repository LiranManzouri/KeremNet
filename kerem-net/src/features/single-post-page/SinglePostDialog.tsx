import React, {FC} from "react";
import {Avatar, Dialog, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {blue} from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";

import {PostModelArray} from "../../../../common/models/post-model";

interface Props {
    open: boolean;
    onClose: (value: string | undefined) => void;
    posts: PostModelArray;
}

const SinglePostDialog: FC<Props> = ({open, onClose, posts}) => {
    const handleClose = () => {
        onClose(undefined);
    }

    const handleOnClick = (postId: number) => {
        onClose(String(postId));
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <List>
                {Object.values(posts).map((post) => {
                    const date = new Date(post.uploadDate);
                    const dateToShow =
                        `${date.toLocaleTimeString([], {timeStyle: 'short'})}, ${date.toLocaleDateString()}`;

                    return (
                        <ListItem disablePadding key={post.id}>
                            <ListItemButton onClick={() => handleOnClick(post.id)}>
                                <ListItemAvatar>
                                    <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                                        <PersonIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={post.username} secondary={dateToShow}/>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Dialog>
    );
}

export default SinglePostDialog;