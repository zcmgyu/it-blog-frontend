import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from 'react-redux'

// MATERIAL UI
import Tabs, { Tab } from "material-ui/Tabs";
import { Route, Redirect, Link, withRouter } from "react-router-dom";
import PostList from "../components/Post/PostList";
import compose from "recompose/compose";
import Profile from "../components/User/Profile";

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

class MyPage extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentWillMount() {
    console.log("Component WILL Mount");
  }

  componentDidMount() {
    console.log("Component DID Mount");
  }

//   componentWillUpdate(nextProps, nextState) {
//     const { dispatch } = nextProps;
//     switch (nextState.value) {
//       case 0:
//         break;

//       default:
//         break;
//     }
//   }

  render() {
    const { classes, match } = this.props;
    return (
      <div className={classes.container}>
        <Profile />
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
            <Redirect from={`${match.url}`} to={`${match.url}/posts`} />
            <Route path={`${match.url}/posts`} component={PostList} />
            <Route path={`${match.url}/bookmarked`} component={PostList} />
            <Route path={`${match.url}/Following`} component={PostList} />
            <Route path={`${match.url}/Followers`} component={PostList} />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles), withRouter, connect())(MyPage);
