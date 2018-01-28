import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getFollow } from "../../actions/user";
import Typography from "material-ui/Typography/Typography";
import Paper from "material-ui/Paper";
import compose from "recompose/compose";
import withStyles from "material-ui/styles/withStyles";

class FollowList extends React.Component {
  componentDidMount() {
    const { dispatch, userId, type } = this.props;

    switch (type) {
      case "following":
        dispatch(getFollow.following.request({ userId, type: "following" }));
        break;
      case "followers":
        dispatch(getFollow.followers.request({ userId, type: "followers" }));
        break;
      default:
        break;
    }
  }

  render() {
    const { following, followers, type, classes } = this.props;

    switch (type) {
      case "following":
        if (
          typeof following === "undefined" ||
          !following ||
          following.length === 0
        ) {
          return (
            <Typography type="body2" gutterBottom>
              No {type}
            </Typography>
          );
        }
        return (
          <div>
            {following.map(profile => {
              return (
                <Paper key={profile.id} className={classes.paper} elevation={4}>
                  <Profile profile={profile} />
                </Paper>
              );
            })}
          </div>
        );
      case "followers":
        if (
          typeof followers === "undefined" ||
          !followers ||
          followers.length === 0
        )
          return (
            <Typography type="body2" gutterBottom>
              No {type}
            </Typography>
          );
        return (
          <div>
            {followers.map((profile, index) => {
              return (
                <Paper key={index} className={classes.paper} elevation={4}>
                  <Profile profile={profile} />
                </Paper>
              );
            })}
          </div>
        );
      default:
        return (
          <Typography type="body2" gutterBottom>
            No {type}
          </Typography>
        );
    }
  }
}

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 2
  }
});

const mapStateToProps = state => ({
  userId: state.user.current_user_info.id,
  following: state.user.following,
  followers: state.user.followers
});

export default compose(withStyles(styles), connect(mapStateToProps))(
  FollowList
);
