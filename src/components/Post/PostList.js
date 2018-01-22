import React from "react";
import PostCard from "../PostCard";
import { connect } from "react-redux";
import { getPostsByAuthorId } from "../../actions/user";
import Typography from "material-ui/Typography/Typography";

class PostList extends React.Component {
  componentDidMount() {
    const { dispatch, authorId } = this.props;
    dispatch(getPostsByAuthorId.request({ authorId }));
  }

  render() {
    const { posts } = this.props;
    if (posts === null)
      return (
        <Typography type="p" gutterBottom>
          No posts
        </Typography>
      );

    // return
    return <div>{posts.map(post => <PostCard post={post} />)}</div>;
  }
}

const mapStateToProps = state => ({
  authorId: state.user.current_user_info.id,
  posts: state.user.posts_by_author
});

export default connect(mapStateToProps)(PostList);
