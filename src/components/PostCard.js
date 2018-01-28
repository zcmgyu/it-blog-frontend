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
  state = { expanded: false, on: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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
            <IconButton
              onClick={() => this.setState({ on: !this.state.on })}
              aria-label="Add to favorites"
            >
              <ToggleIcon
                on={this.state.on}
                onIcon={<FavoriteIcon color="accent" />}
                offIcon={<FavoriteIcon />}
              />
            </IconButton>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
            <SharingButton shareUrl={shareUrl} title={title} />
            <div className={classes.flexGrow} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostCard);
