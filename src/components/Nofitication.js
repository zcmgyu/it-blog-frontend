import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Popover from "material-ui/Popover";
import Notifications from "material-ui-icons/Notifications";
import IconButton from "material-ui/IconButton";
import Badge from "material-ui/Badge";
import SockJsClient from "react-stomp";
import { getAuth } from "../utils/localStorage";
import { connect } from 'react-redux';
import compose from "recompose/compose"
import { getNotifications } from "../actions/user";

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
      notifications: this.props.notificationsProps
    };
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

  handleMessage(notification) {
    console.log("*****************")
    console.log(notification)
    let { notifications } = this.state;

    this.setState({ notifications: [notification, ...notifications] });
  }

  // handleSendNotify() {
  //   const { access_token } = getAuth();
  //   // const body = { username: this.state.target }
  //   fetch(`/some-action/${this.state.target}?access_token=${access_token}`, {
  //     headers: { "content-type": "application/json" },
  //     method: "POST"
  //   })
  //     .then(result => result)
  //     .catch(error => {
  //       throw new Error(error);
  //     });
  // }


  componentWillReceiveProps(nextProps) {
    this.setState({ notifications: nextProps.notificationsProps })
  }


  renderMessages = () => {
    const { classes } = this.props
    const { notifications } = this.state

    if (notifications && notifications.length > 0) {
      notifications.map(notification => {
        console.log("DEBUG")
        console.log(notification.id)
      })
      return (
        notifications.slice(0, 10).map((notification, index) => (
          <Typography key={notification.id} className={classes.typography}>
            {notification.message}
          </Typography>
        )))
    } else {
      return (<Typography className={classes.typography}>
        No notifications
      </Typography>)
    }
  }

  componentDidMount() {
    this.props.dispatch(getNotifications.request());
  }

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
          <Badge className={classes.badge} badgeContent={0} color="accent">
            <Notifications />
          </Badge>
        </IconButton>

        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorPosition={{ top: 400, left: 400 }}
          anchorReference={"anchorEl"}
          onClose={this.handleRequestClose}
        >
          {this.renderMessages()}
        </Popover>
        <SockJsClient
          url={`http://localhost:9292/ws?access_token=${access_token}`}
          topics={['/user/queue/notify']}
          onMessage={(message) => this.handleMessage(message)} />
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  { notificationsProps: state.user.notifications }
)

export default compose(withStyles(styles), connect(mapStateToProps))(Notification);