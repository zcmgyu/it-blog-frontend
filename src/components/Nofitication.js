import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Popover from "material-ui/Popover";
import Notifications from "material-ui-icons/Notifications";
import IconButton from "material-ui/IconButton";
import Badge from "material-ui/Badge";

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
      anchorEl: null
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

  render() {
    const { classes } = this.props;
    const { open, anchorEl } = this.state;
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
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notification);
