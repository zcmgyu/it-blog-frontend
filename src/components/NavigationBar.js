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
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { push } from "react-router-redux";
// Actions
import { toggleLoginDialog } from "../actions/dialog";
import { search as searchAct } from "../actions/search";

// Components
import PopoverMenu from "./PopoverMenu";
import EditButton from "./Post/EditButton";
import Publish from "./Post/Publish";

// REDUX-FORM
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "./ReduxForm";

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
  //   handleChange = event => {
  //     this.setState({ [event.target.name]: event.target.value });
  //   };

  handleSearch = ({ search }) => {
    this.props.dispatch(searchAct.request({ search }));
    this.props.dispatch(push(`/search?q=${search}`));
  };

  render() {
    const { classes, title, isAuthenticated, handleSubmit } = this.props;
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
              {title}
            </Typography>
            <Switch>
              <Route
                path="/posts/create"
                render={() => <Publish name="Publish" />}
              />
              <Route
                path="/posts/:postId/:transliterated/edit"
                render={() => <Publish name="Update" />}
              />
              <Route
                path="/posts/:postId/:transliterated"
                component={EditButton}
              />
            </Switch>
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
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn-images-1.medium.com/fit/c/100/100/0*bh4kZqN3bPPuk15J.jpg"
                  className={classes.avatar}
                />
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
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  loginDialogState: state.dialog.loginDialogState,
  isAuthenticated: state.auth.isAuthenticated,
  isPost: state.post.isPost
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
  connect(mapStateToProps, mapDispatchToProps),
)(NavigationBar);
