import React from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import Typography from "material-ui/Typography";
import PostCard2 from "../PostCard2";
import compose from "recompose/compose";
import withStyles from "material-ui/styles/withStyles";

const CardGrid = props => {
    // switch (props.match.params.type) {
    //   case "latest":
    //     this.setState({ value: 0 });
    //     break;
    //   case "trend":
    //     this.setState({ value: 1 });
    //     break;
    //   default:
    //     break;
    // }

  const { classes, listPost } = props;
  if (typeof listPost === "undefined") return <Loading />;

  return listPost.map(group => (
    <div key={group.id} className={classes.section}>
      <Typography type="display1" className={classes.sectionTitle}>
        {group.category}
      </Typography>
      {group.top4.map(post => <PostCard2 key={post.id} post={post} />)}
    </div>
  ));
};

export default compose(withStyles(), connect())(CardGrid);
