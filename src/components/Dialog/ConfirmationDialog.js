import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ConfirmationDialog extends React.Component {
    render() {
        return(
            <Dialog
            open={this.props.open}
            
            keepMounted
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
            {"Confirmation"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
               You've completed this challenge!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
                Thanks
            </Button>
            </DialogActions>
          </Dialog>
        );
    }
  
}

export default ConfirmationDialog;
