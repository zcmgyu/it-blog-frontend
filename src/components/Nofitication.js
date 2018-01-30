import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Popover from "material-ui/Popover";
import Notifications from "material-ui-icons/Notifications";
import IconButton from "material-ui/IconButton";
import Badge from "material-ui/Badge";
import { getAuth } from "../utils/localStorage";
import SockJsClient from "react-stomp";

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit * 4
  },
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorEl: null,
      messages: []
    };

    this.button = "abc";
  }

  handleClickButton() {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button)
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleMessage(message) {
    let { messages } = this.state;
    this.setState({ messages: [...messages, message.content] });
  }

  handleSendNotify() {
    const { access_token } = getAuth();
    // const body = { username: this.state.target }
    fetch(`/some-action/${this.state.target}?access_token=${access_token}`, {
      headers: { "content-type": "application/json" },
      method: "POST"
    })
      .then(result => result)
      .catch(error => {
        throw new Error(error);
      });
  }

  renderMessages = () => (
      this.state.messages.map((message, index) => (<li key={index}>{message}</li>))
  )

  render() {
    const { classes } = this.props;
    const { open, anchorEl } = this.state;
    if (!getAuth()) {
        return null;
    }
    const { access_token } = getAuth();
    
    return (
      <div>
        <IconButton
          ref={node => {
            this.button = node;
          }}
          onClick={this.handleClickButton.bind(this)}
        >
          <Badge className={classes.badge} badgeContent={2} color="accent">
            <Notifications />
          </Badge>
        </IconButton>
          {this.renderMessages()}
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorPosition={{ top: 400, left: 400 }}
          anchorReference={"anchorEl"}
          onClose={this.handleRequestClose}
        >
          <Typography className={classes.typography}>
            You received like from Long Nguyen
          </Typography>
          <Typography className={classes.typography}>
            You were followed by account Long Nguyen
          </Typography>
        </Popover>
        <SockJsClient
          url={`http://localhost:9292/ws?access_token=${access_token}`}
          topics={["/user/queue/notify"]}
          onMessage={message => this.handleMessage(message)}
        />
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notification);
