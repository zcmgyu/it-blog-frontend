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
    if (typeof posts === "undefined" || !posts || posts.length === 0)
      return (
        <Typography type="body2" gutterBottom>
          No posts
        </Typography>
      );
          
    return (
      <div>{posts.map(post => <PostCard key={post.id} post={post} />)}</div>
    );
  }
}

const mapStateToProps = state => ({
  authorId: state.user.current_user_info.id,
  posts: state.user.posts_by_author
});

export default connect(mapStateToProps)(PostList);
