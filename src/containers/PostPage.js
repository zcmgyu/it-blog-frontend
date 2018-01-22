import React, { Component } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import { saveDraft } from "../actions/post";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import withTracker from "../HOCs/withTracker";
import { userIsAuthenticatedRedir } from "../HOCs/auth";
// Post
import EditPost from "../components/Post/EditPost";
import CreatePost from "../components/Post/CreatePost";
import ViewPost from "../components/Post/ViewPost";

const styles = theme => ({});

const CreatePostAuth = userIsAuthenticatedRedir(CreatePost)
const EditPostAuth = userIsAuthenticatedRedir(EditPost)

class PostPage extends Component {
  handleOnSave = (editorContext, content) => {
    console.info({
      editor_content: JSON.stringify(content),
      text_content: editorContext.getTextFromEditor(content)
    });
    this.props.dispatch(saveDraft.request(content));
  };

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          path={`${match.url}/create`}
          component={CreatePostAuth}
        />
        <Route
          path={`${match.url}/:postId/:transliterated/edit`}
          component={EditPostAuth}
        />
        <Route
          exact
          path={`${match.url}/:postId/:transliterated`}
          component={withTracker(ViewPost)}
        />
      </Switch>
    );
  }
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withRouter)(PostPage);
