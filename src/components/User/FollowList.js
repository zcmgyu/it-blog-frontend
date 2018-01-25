import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getFollow } from "../../actions/user";
import Typography from "material-ui/Typography/Typography";
import * as ActionTypes from '../../actiontypes/user'

class FollowList extends React.Component {
  componentDidMount() {
    const { dispatch, userId, type } = this.props;
    console.log("DEBUG ************")
    console.log(this.props)
    switch (type) {
      case "following":
        dispatch(getFollow.following.request({ userId, type }));
        console.log("test1");
        break;
      case "followers":
        dispatch(getFollow.followers.request({ userId, type }));
        console.log("test2");
        break;
      default:
        break;
    }
  }

  render() {
    const { following, followers, type } = this.props;

    switch (type) {
      case "following":
        if (typeof following === 'undefined' || !following || following.length === 0) {
          return (
            <Typography type="body2" gutterBottom>
              No {type}
            </Typography>
          );
        }
        console.log("following")
        console.log(following)
        return <div>{following.map(profile => { return (<Profile key={profile.id} profile={profile} />) })}</div>;
      case "followers":
        if (typeof followers === 'undefined' || !followers || followers.length === 0)
          return (
            <Typography type="body2" gutterBottom>
              No {type}
            </Typography>
          );
        return <div>{followers.map(profile => { return (<Profile key={profile.id} profile={profile} />) })}</div>;
      default:
        return (
          <Typography type="body2" gutterBottom >
            No {type}
          </Typography >
        )
    }
  }
}

const mapStateToProps = state => ({
  userId: state.user.current_user_info.id,
  following: state.user.following,
  followers: state.user.followers,
});

export default connect(mapStateToProps)(FollowList);
