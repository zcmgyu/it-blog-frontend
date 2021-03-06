import React, { Component } from "react";
import { connect } from "react-redux";
import PostEditor from "../PostEditor";
import { getPost, cleanCurrentPost } from "../../actions/post";
import Profile from "../User/Profile";
import compose from "recompose/compose";
import withStyles from "material-ui/styles/withStyles";
import Loading from "../Loading";

class ViewPost extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(cleanCurrentPost());
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { postId } = match.params;
    dispatch(getPost.request({ postId }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const result = nextProps.currentPost !== this.props.currentPost;
    return result;
  }

  render() {
    const { isLoaded, currentPost, classes } = this.props;
    if (!currentPost) {
      return null;
    }
    const profile = currentPost.author;
    if (isLoaded) {
      return (
        <div className={classes.container}>
          <Profile profile={profile} />
          <PostEditor
            config={{
              debug: true,
              read_only: true,
              api_key: "86c28a410a104c8bb58848733c82f840"
            }}
            content={currentPost.content}
          />
        </div>
      );
    }
    return <Loading />;
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  currentPost: state.post.current_post,
  isLoaded: state.post.is_loaded
});

export default compose(withStyles(styles), connect(mapStateToProps))(ViewPost);
