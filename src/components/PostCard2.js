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
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import { addThreeDots } from "../utils/stringUtil";
import { push } from "react-router-redux";
import ToggleIcon from "material-ui-toggle-icon";

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
    },
  };
};

// const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim purus vitae ipsum interdum, quis tristique eros imperdiet."
// const shortContent = "Suspendisse aliquam egestas risus, et volutpat eros laoreet in. Nullam ultrices euismod ornare. Integer in nibh a velit aliquam venenatis id sit amet nunc. Donec id rhoncus augue. Aliquam venenatis purus a arcu varius vehicula. Sed et turpis elementum, commodo sem eget, consectetur ante. Suspendisse potenti. Suspendisse lacinia lectus risus, at dictum lorem bibendum ac. Sed fringilla lacinia odio nec rutrum. Morbi nisl lorem, rhoncus nec ligula a, malesuada ultrices mi. Integer finibus quam at purus finibus auctor. Praesent molestie nunc ut dolor ultrices interdum. Fusce ut placerat augue. Nunc scelerisque ut dolor non vulputate. Vivamus dolor mi, egestas eu felis nec, consequat vestibulum sem. Quisque iaculis vestibulum feugiat."

class PostCard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSharing: false,
      on: false
    };
  }

  shareToSNS = () => {
    this.setState({ isSharing: true });
  };

  showPost = () => {
    console.log("@DEBUG");
    console.log(this.props);
    const { id, transliterated } = this.props.post;
    this.props.dispatch(push(`/posts/${id}/${transliterated}`));
  };

  render() {
    const { classes, post } = this.props;
    const {
      id,
      title,
      shortContent,
      image,
      transliterated,
      createAt,
      author
    } = post;
    const { name } = author;
    let avatarLetter;
    if (name.indexOf(" ") < 0) {
      avatarLetter = name.slice(0, 2);
    } else {
      avatarLetter =
        name.slice(0, name.indexOf(" ")).charAt(0) +
        name.slice(name.lastIndexOf(" ") + 1).charAt(0);
    }
    avatarLetter = avatarLetter.toUpperCase();

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.columnLeft}>
            <CardMedia
              className={classes.cover}
              image={image || "https://i.imgur.com/U7pPkAd.png"}
              title="Live from space album cover"
            />
          </div>
          <div className={classes.columnRight}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
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
                {addThreeDots(shortContent, 156)}
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
              <div className={classes.flexGrow} />
              <IconButton onClick={() => this.setState({ on: !this.state.on })} aria-label="Add to favorites">
                <ToggleIcon
                  on={this.state.on}
                  onIcon={<FavoriteIcon color='accent' />}
                  offIcon={<FavoriteIcon />}
                />
              </IconButton>
              <IconButton aria-label="Share" onClick={this.shareToSNS}>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

PostCard2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default compose(withStyles(styles, { withTheme: true }), connect())(
  PostCard2
);
