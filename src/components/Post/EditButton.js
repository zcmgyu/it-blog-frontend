import React from "react";
import Button from "material-ui/Button";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import { editPostTrigger } from "../../actions/post";

const styles = theme => ({
  button: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
  }
});

const EditButton = props => {
  const { classes, currentPost, currentUser } = props;

  const { pathname } = props.location;
  const editPath = `${pathname}/edit`;

  const handleClick = e => {
    props.dispatch(editPostTrigger());
  };

  if (!currentPost) {
      return null;
  }

  const { author } = currentPost;

  if (currentUser && author && author.id === currentUser.id) {
    return (
      <Button
        className={classes.button}
        onClick={handleClick}
        component={Link}
        to={editPath}
      >
        Edit
      </Button>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  currentPost: state.post.current_post,
  currentUser: state.user.current_user_info
});

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps)
)(EditButton);
