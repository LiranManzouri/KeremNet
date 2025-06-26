import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import React, {FC, FormEvent} from "react";
import {PostModelArray} from "../../../../../common/models/post-model";
import axios from "axios";
import routes from "../../routes.json";

interface Props {
    open: boolean;
    onClose: () => void;
    posts: PostModelArray;
}

const AddPostDialog: FC<Props> = ({open, onClose, posts}) => {

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open} slotProps={{
            paper: {
                component: 'form',
                onSubmit: async (event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const username = formJson.username;
                    const text = formJson.text;

                    try {
                        await axios.post(routes.postsRoute, {
                            username: username,
                            uploadDate: new Date().toISOString(),
                            text: text
                        });
                    } catch (e) {
                    }

                    handleClose();
                },
            },
        }}>
            <DialogTitle>Add info about your new post:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    id="name"
                    name="username"
                    margin="dense"
                    label="Username"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    id="name"
                    name="text"
                    margin="dense"
                    label="Text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddPostDialog;