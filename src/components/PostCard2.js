// @flow weak

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Card, {
  CardContent,
  CardMedia,
  CardHeader,
  CardActions
} from "material-ui/Card";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import { addThreeDots } from "../utils/stringUtil";
import { push } from "react-router-redux";
import { bookmarkPost, favoritePost } from "../actions/post";
import { generateAvatarLetter } from "../utils/stringUtil";
import PostAction from "../components/Post/PostAction";

class PostCard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSharing: false,
      favorited: false,
      bookmarked: false
    };
  }

  bookmark = () => {
    const { dispatch, post } = this.props;
    this.setState({ bookmarked: !this.state.bookmarked });
    dispatch(bookmarkPost.request({ postId: post.id }));
  };

  favorite = () => {
    const { dispatch, post } = this.props;
    this.setState({ favorited: !this.state.favorited });
    dispatch(favoritePost.request({ postId: post.id }));
  };

  showPost = () => {
    const { id, transliterated } = this.props.post;
    this.props.dispatch(push(`/posts/${id}/${transliterated}`));
  };

  componentDidMount() {
    const { isAuthenticated, currentUser, post, bookmark } = this.props;
    if (!isAuthenticated) {
      return null;
    }
    const { favorite } = post;
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
      post &&
      bookmark.filter(bm => bm.id === post.id).length > 0
    ) {
      this.setState({ bookmarked: true });
    } else {
      this.setState({ bookmarked: false });
    }
  }

  render() {
    const { classes, post } = this.props;
    const {
      id,
      title,
      rawContent,
      image,
      transliterated,
      createAt,
      author
    } = post;
    const { name } = author;

    const avatarLetter = generateAvatarLetter(name);

    const shareUrl = `http://localhost:3000/posts/${id}/${transliterated}`;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.columnLeft}>
            <CardMedia
              className={classes.cover}
              image={image || "https://i.imgur.com/U7pPkAd.png"}
              title="cover"
            />
          </div>
          <div className={classes.columnRight}>
            <CardHeader
              avatar={
                <Avatar aria-label="avatar" className={classes.avatar}>
                  {avatarLetter}
                </Avatar>
              }
              title={addThreeDots(name, 17)}
              subheader={new Date(createAt).toDateString()}
            />
            <CardContent className={classes.shortPost} onClick={this.showPost}>
              <Typography
                type="title"
                className={classes.title}
                component={Link}
                to={`/posts/${id}/${transliterated}`}
              >
                {addThreeDots(title, 80)}
              </Typography>
              <Typography component="p" className={classes.content}>
                {addThreeDots(rawContent, 156)}
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <PostAction
                favorite={this.favorite}
                bookmark={this.bookmark}
                favorited={this.state.favorited}
                bookmarked={this.state.bookmarked}
                shareUrl={shareUrl}
                title={title}
              />
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

const styles = theme => {
  return {
    card: {
      width: theme.spacing.unit * 60,
      height: theme.spacing.unit * 40,
      display: "flex",
      margin: theme.spacing.unit * 1
    },
    columnLeft: {
      flexGrow: 1,
      display: "flex"
    },
    cover: {
      flexGrow: 1
    },
    shortPost: {
      height: "10px",
      flexGrow: 1,
      paddingTop: "0px"
    },
    title: {
      paddingTop: "0px",
      textDecoration: "none"
    },
    content: {
      paddingTop: theme.spacing.unit * 2
    },
    columnRight: {
      flexBasis: "60%",
      display: "flex",
      flexDirection: "column"
    },
    flexGrow: {
      flex: "1 1 auto"
    }
  };
};

PostCard2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.user.current_user_info,
  bookmark: state.user.bookmark,
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(PostCard2);
