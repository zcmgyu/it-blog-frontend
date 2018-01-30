import React from "react";
import { connect } from "react-redux";
import Typography from "material-ui/Typography/Typography";
import Author from "../Author";

class PostList extends React.Component {
  render() {
    const { authors } = this.props;
    if (typeof authors === "undefined" || !authors || authors.length === 0)
      return (
        <Typography type="body2" gutterBottom>
          No results
        </Typography>
      );
          
    return (
      <div>{authors.map(author => <Author key={author.id} author={author} />)}</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.search.result.posts
});

export default connect(mapStateToProps)(PostList);
