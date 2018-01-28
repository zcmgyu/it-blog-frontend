import React from "react";
import PostCard from "../PostCard";
import { connect } from "react-redux";
import { getPostsByAuthorId } from "../../actions/user";
import Typography from "material-ui/Typography/Typography";

class PostList extends React.Component {
  componentDidMount() {
    const { dispatch, authorId } = this.props;
  }

  render() {
    const { posts } = this.props;
    if (typeof posts === "undefined" || !posts || posts.length === 0)
      return (
        <Typography type="body2" gutterBottom>
          No results
        </Typography>
      );
          
    return (
      <div>{posts.map(post => <PostCard key={post.id} post={post} />)}</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.search.result.posts
});

export default connect(mapStateToProps)(PostList);
