import React from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

class PushNotification extends React.Component {
  state = {
    open: this.props.open || false,
    vertical: 'top',
    horizontal: 'right',
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <div>
       
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
        />
      </div>
    );
  }
}

export default PushNotification;