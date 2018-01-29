import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button/Button";
import { userIsAuthenticatedRedir } from "../../HOCs/auth";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { getFollow, putFollow } from "../../actions/user";
import { generateAvatarLetter } from "../../utils/stringUtil";
import FollowButton from "../FollowButton";

class Profile extends Component {
  state = { isFollowing: false };

  handleFollow = () => {
    const { dispatch, profile } = this.props;
    this.setState({ isFollowing: !this.state.isFollowing });
    dispatch(putFollow.request({ userId: profile.id }));
  };

  componentDidMount() {
    const { dispatch, userId, following } = this.props
    dispatch(getFollow.following.request({ userId, type: "following" }))
  }

  renderFollowBtn = () => {
    const { following, profile, userId } = this.props
    if (userId === profile.id) {
        return null;       
    }
    const isFollowing = following.filter(user => user.id === profile.id).length > 0
    return (
      <FollowButton following={isFollowing} userId={profile.id}></FollowButton>
    )
  };

  render() {
    const { classes, profile, isAuthenticated } = this.props;
    const { name, image } = profile;
    const avatarLetter = generateAvatarLetter(name);
    return (
      <div className={classes.profile}>
        {image ? (
          <Avatar alt="Avatar" src={image} className={classes.avatar} />
        ) : (
          <Avatar alt="Avatar" className={classes.avatar}>
            {avatarLetter}
          </Avatar>
        )}
        <div className={classes.hero}>
          <div className={classes.profileName}>
            <Typography type="headline" gutterBottom>
              {name}
            </Typography>
            {isAuthenticated && this.renderFollowBtn()}
          </div>
          <Typography type="subheading" gutterBottom>
            Write something about yourself
          </Typography>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  profile: {
    width: "660px",
    display: "flex"
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  profileName: {
    display: "flex"
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  button: {
    marginLeft: theme.spacing.unit,
    width: theme.spacing.unit * 4
  }
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.user.current_user_info.id,
  following: state.user.following
});

export default compose(withStyles(styles), connect(mapStateToProps))(Profile);
