/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import SharingButton from "./SharingButton";
import ToggleIcon from "material-ui-toggle-icon";
import { addThreeDots } from "../utils/stringUtil";
import { Link } from "react-router-dom";

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
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
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
              {addThreeDots(shortContent, 156)}
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
            <SharingButton />
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostCard);
