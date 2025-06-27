import React, {FC} from "react";
import {Alert, Snackbar, SnackbarCloseReason} from "@mui/material";
import {AlertInfo} from "../App";

interface Props {
    alertInfo: AlertInfo;
}

const CustomizedSnackbar: FC<Props> = ({alertInfo}) => {
    const handleCloseAlert = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        alertInfo.setShowAlert(false);
        alertInfo.setAlertMessage('');
    };

    console.log(alertInfo.alertMessage + ' ' + alertInfo.showAlert);

    return (
        <div>
            <Snackbar open={alertInfo.showAlert} autoHideDuration={1500} onClose={() => handleCloseAlert()}>
                <Alert severity="error">{alertInfo.alertMessage}</Alert>
            </Snackbar>
        </div>
    );
}

export default CustomizedSnackbar;