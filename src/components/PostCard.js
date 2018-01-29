/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import BookmarkIcon from "material-ui-icons/Bookmark";
import SharingButton from "./SharingButton";
import ToggleIcon from "material-ui-toggle-icon";
import { addThreeDots } from "../utils/stringUtil";
import { Link } from "react-router-dom";
import { generateAvatarLetter } from "../utils/stringUtil";
import PostAction from "../components/Post/PostAction"
import { bookmarkPost, favoritePost } from "../actions/post";
import { push } from "react-router-redux";
import { connect } from 'react-redux'
import compose from "recompose/compose";


const styles = theme => ({
  card: {
    width: 500,
    margin: theme.spacing.unit * 2
  },
  media: {
    height: 194
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  flexGrow: {
    flex: "1 1 auto"
  },
  title: {
    paddingTop: "0px",
    textDecoration: "none"
  }
});

class PostCard extends React.Component {
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
    const { currentUser, post, bookmark } = this.props;
    const { favorite } = post;
    if (favorite && currentUser && typeof currentUser.id !== "undefined" && favorite.filter(user => user.id === currentUser.id).length > 0) {
      this.setState({ favorited: true });
    } else {
      this.setState({ favorited: false });
    }
    const result = bookmark && post && bookmark.id === post.id;
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
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {avatarLetter}
              </Avatar>
            }
            title={addThreeDots(name, 17)}
            subheader={new Date(createAt).toDateString()}
          />
          <CardMedia
            className={classes.media}
            image={
              image ||
              "http://www.codice.cc/wp-content/uploads/2016/09/flux-logo.png"
            }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              type="title"
              className={classes.title}
              component={Link}
              to={`/posts/${id}/${transliterated}`}
            >
              {addThreeDots(title, 80)}
            </Typography>
            <Typography component="p">
              {addThreeDots(rawContent, 156)}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <PostAction favorite={this.favorite} bookmark={this.bookmark} favorited={this.state.favorited} bookmarked={this.state.bookmarked} shareUrl={shareUrl} title={title} />
          </CardActions>
        </Card>
      </div>
    );
  }
}


PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.user.current_user_info,
  bookmark: state.user.bookmark
})

export default compose(withStyles(styles), connect(mapStateToProps))(PostCard);
