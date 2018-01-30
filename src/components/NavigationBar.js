import React, { Component } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Notification from "./Nofitication";
import Avatar from "material-ui/Avatar";
import { Route, Link, withRouter } from "react-router-dom";
import { push } from "react-router-redux";
// Actions
import { toggleLoginDialog } from "../actions/dialog";
import { search as searchAct } from "../actions/search";
import { bookmarkPost, favoritePost } from "../actions/post";
import { generateAvatarLetter } from "../utils/stringUtil";

// Components
import PopoverMenu from "./PopoverMenu";
import EditButton from "./Post/EditButton";
import Publish from "./Post/Publish";

// REDUX-FORM
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "./ReduxForm";
import PostAction from "./Post/PostAction";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    paddingTop: 56,
    width: "100%"
  },
  flex: {
    flex: 1,
    textDecoration: "none"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  fixedPosition: {
    left: 0,
    position: "fixed",
    top: 0
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`
  },
  formControl: {
    minWidth: 120
  }
});

class NavigationBar extends Component {
  state = {
    isSharing: false,
    favorited: false,
    bookmarked: false
  };

  bookmark = () => {
    const { dispatch, currentPost } = this.props;
    this.setState({ bookmarked: !this.state.bookmarked });
    dispatch(bookmarkPost.request({ postId: currentPost.id }));
  };

  favorite = () => {
    const { dispatch, currentPost } = this.props;
    this.setState({ favorited: !this.state.favorited });
    dispatch(favoritePost.request({ postId: currentPost.id }));
  };

  handleSearch = ({ search }) => {
    this.props.dispatch(searchAct.request({ search }));
    this.props.dispatch(push(`/search?q=${search}`));
  };

  renderAction = () => {
    const { currentPost } = this.props;

    if (!currentPost) {
      return null;
    }
    const { id, title, author } = currentPost;

    if (!author) {
      return null;
    }
    const transliterated = title.replace(/\s+/g, "-");

    const shareUrl = `http://localhost:3000/posts/${id}/${transliterated}`;
    return (
      <PostAction
        favorite={this.favorite}
        bookmark={this.bookmark}
        favorited={this.state.favorited}
        bookmarked={this.state.bookmarked}
        shareUrl={shareUrl}
        title={title}
      />
    );
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPost === nextProps.currentPost) {
      return false;
    }
    const { currentUser, currentPost, bookmark } = nextProps;
    const { favorite } = currentPost;
    if (!currentUser) {
      return false;
    }
    if (
      favorite &&
      currentUser &&
      typeof currentUser.id !== "undefined" &&
      favorite.filter(user => user.id === currentUser.id).length > 0
    ) {
      this.setState({ favorited: true });
    } else {
      this.setState({ favorited: false });
    }
    if (
      bookmark &&
      currentPost &&
      bookmark.filter(bm => bm.id === currentPost.id).length > 0
    ) {
      this.setState({ bookmarked: true });
    } else {
      this.setState({ bookmarked: false });
    }
  }

  render() {
    const {
      classes,
      navTitle,
      isAuthenticated,
      handleSubmit,
      currentUser
    } = this.props;
    const { name, image } = currentUser || { name: "Invalid", image: "" };
    const avatarLetter = generateAvatarLetter(name);
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classes.fixedPosition}
          color="inherit"
        >
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              className={classes.flex}
              component={Link}
              to="/"
            >
              {navTitle}
            </Typography>
            <Route
              path="/posts/create"
              render={() => <Publish name="Publish" />}
            />

            <Route
              exact
              path="/posts/:postId/:transliterated/edit"
              render={() => <Publish name="Update" />}
            />
            <Route
              exact
              path="/posts/:postId/:transliterated"
              render={() => this.renderAction()}
            />
            <Route
              exact
              path="/posts/:postId/:transliterated"
              component={EditButton}
            />
            <form onSubmit={handleSubmit(this.handleSearch)}>
              <Field
                name="search"
                component={renderTextField}
                label="Search"
                type="search"
                required={true}
              />
            </form>
            <Notification />
            {isAuthenticated ? (
              <PopoverMenu>
                {image ? (
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn-images-1.medium.com/fit/c/100/100/0*bh4kZqN3bPPuk15J.jpg"
                    className={classes.avatar}
                  />
                ) : (
                    <Avatar alt="Avatar" className={classes.avatar}>
                      {avatarLetter}
                    </Avatar>
                  )}
              </PopoverMenu>
            ) : (
                <Button color="inherit" component={Link} to="/sign-in">
                  Sign In
              </Button>
              )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navTitle: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  loginDialogState: state.dialog.loginDialogState,
  isAuthenticated: state.auth.isAuthenticated,
  isPost: state.post.isPost,
  bookmark: state.user.bookmark,
  currentPost: state.post.current_post,
  currentUser: state.user.current_user_info
});

const mapDispatchToProps = dispatch => ({
  toggleLoginDialog: bindActionCreators(toggleLoginDialog, dispatch),
  pushLocation: bindActionCreators(push, dispatchEvent)
});

export default compose(
  withStyles(styles, {
    name: "NavigationBar"
  }),
  // Render Router with Redux
  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
  withRouter,
  reduxForm({
    form: "search-form"
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(NavigationBar);
