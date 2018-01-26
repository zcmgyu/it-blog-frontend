import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import PostCard2 from "../components/PostCard2";
import Typography from "material-ui/Typography";
import Tabs, { Tab } from "material-ui/Tabs";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getTop4ByCategory } from "../actions/post";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { getBookmark } from "../actions/user";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  section: {
    maxWidth: "1032px",
    justifyContent: "center",
    // justifyContent: 'space-between',
    alignItems: "flex-start",
    display: "flex",
    flexWrap: "wrap"
  },
  sectionTitle: {
    flex: "0 1 100%",
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  },
  flexGrow: {
    flexGrow: 1
  }
});

class HomePage extends Component {
  state = {
    value: 0
  };

  componentWillMount() {
    switch (this.props.match.params.type) {
      case "trend":
        this.setState({ value: 0 });
        break;
      case "latest":
        this.setState({ value: 1 });
        break;
      default:
        this.setState({ value: 0 });
        break;
    }
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getTop4ByCategory.request({ type: match.params.type }));
    dispatch(getBookmark.request());
  }

  componentWillReceiveProps(nextProps) {
    const currentType = this.props.match.params.type;
    const nextType = nextProps.match.params.type;
    if (currentType !== nextType) {
      nextProps.dispatch(getTop4ByCategory.request({ type: nextType }));
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderSection = () => {
    const { classes, listPost } = this.props;
    if (typeof listPost === "undefined") return <Loading />;
    console.log(listPost)
    return listPost.map((group, index) => (
      <div key={index} className={classes.section}>
        <Typography type="display1" className={classes.sectionTitle}>
          {group.category}
        </Typography>
        {group.top4.map((post, index) => <PostCard2 key={index} post={post} />)}
      </div>
    ));
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.container}>
        <div>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Trend" component={Link} to={`/home/trend`} />
            <Tab label="Latest" component={Link} to={`/home/latest`} />
          </Tabs>
        </div>
        {this.renderSection()}
      </div>
    );
  }
}

// <CardGrid tab={this.state.tab} {...props} />

const mapStateToProps = state => ({
  listPost: state.post.list_post
});

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStateToProps)
)(HomePage);
