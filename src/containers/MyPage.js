import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from 'react-redux'

// MATERIAL UI
import Tabs, { Tab } from "material-ui/Tabs";
import { Route, Link, withRouter } from "react-router-dom";
import PostList from "../components/User/PostList";
import compose from "recompose/compose";
import Profile from "../components/User/Profile";
import BookmarkList from "../components/User/BookmarkList";
import FollowList from "../components/User/FollowList";
import { type } from "os";


// ACTIONS

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  section: {
    display: "flex",
    justifyContent: "center"
  }
};

const FollowingList = (props) => (
  <FollowList type="following" {...props}/>
)

const FollowersList = (props) => (
  <FollowList type="followers" {...props}/>
)

class MyPage extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, match, profile } = this.props;
    console.log("PROFILE")
    console.log(profile)
    return (
      <div className={classes.container}>
        <Profile profile={profile} />
        <div className={classes.content}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Posts" component={Link} to={`${match.url}/posts`} />
            <Tab
              label="Bookmarked"
              component={Link}
              to={`${match.url}/bookmarked`}
            />
            <Tab
              label="Following"
              component={Link}
              to={`${match.url}/following`}
            />
            <Tab
              label="Followers"
              component={Link}
              to={`${match.url}/followers`}
            />
          </Tabs>
          <div className={classes.section}>
            <Route path={`${match.url}/posts`} component={PostList} />
            <Route path={`${match.url}/bookmarked`} component={BookmarkList} />
            <Route path={`${match.url}/following`} component={FollowingList} />
            <Route path={`${match.url}/followers`} component={FollowersList} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.user.current_user_info
  }
}

export default compose(withStyles(styles), withRouter, connect(mapStateToProps))(MyPage);
