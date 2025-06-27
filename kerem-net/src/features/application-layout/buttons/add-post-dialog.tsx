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
import axios from "axios";
import routes from "../../routes.json";
import CustomizedSnackbar from "../../../CustomizedSnackbar";
import {AlertInfo} from "../../../App";

interface Props {
    open: boolean;
    onClose: () => void;
    alertInfo: AlertInfo;
}

const AddPostDialog: FC<Props> = ({open, onClose, alertInfo}) => {
    const handleCloseDialog = () => {
        onClose();
    }

    return (
        <div>
            {
                <Dialog onClose={handleCloseDialog} open={open} slotProps={{
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
                                alertInfo.setShowAlert(true);
                                alertInfo.setAlertMessage('Error adding the post!');
                            }

                            handleCloseDialog();
                        },
                    },
                }}>
                    <DialogTitle>Add info about your new post:</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter your username and text
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
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            }
            <CustomizedSnackbar alertInfo={alertInfo}/>
        </div>
    )
}

export default AddPostDialog;