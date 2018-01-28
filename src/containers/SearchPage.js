import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Chip from "material-ui/Chip";
import Tabs, { Tab } from "material-ui/Tabs";
import TextField from "material-ui/TextField";
import Author from "../components/Author";
import { renderTextField } from "../components/ReduxForm";
import compose from "recompose/compose";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { search as searchAct } from "../actions/search";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import SearchList from "../components/Search/SearchList";
import AuthorList from "../components/Search/AuthorList";

const handleClick = () => {
  alert("You clicked the Chip."); // eslint-disable-line no-alert
};

class SearchPage extends Component {
  state = {
    value: 0
  };

  handleSearch = data => {
    this.props.dispatch(push(`/search?q=${data.search}`));
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get("q");
    this.props.dispatch(searchAct.request({ search }));
  };

  renderPost = () => {
    const { result } = this.props;
    return result ? <SearchList posts={result.posts} /> : null;
  };

  renderAuthor = () => {
    const { result } = this.props;
    return result ? <AuthorList authors={result.users} /> : null;
  };

  render() {
    const { classes, handleSubmit, result } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <form onSubmit={handleSubmit(this.handleSearch)}>
              <Field
                name="search"
                component={renderTextField}
                label="Search"
                type="search"
                required={true}
                fullWidth
              />
            </form>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Posts" />
              <Tab label="Authors" />
              <Tab label="Tags" />
            </Tabs>
          </div>
          <div className={classes.content}>
            <div className={classes.left}>
              <Typography type="title" gutterBottom>
                POSTS
              </Typography>
              <div className={classes.posts}>{this.renderPost()}</div>
            </div>
            <div className={classes.right}>
              <Typography type="title">TAGS</Typography>
              <div className={classes.tags}>
                <Chip
                  label="AngularJS"
                  onClick={handleClick}
                  className={classes.chip}
                />
                <Chip
                  label="NodeJS"
                  onClick={handleClick}
                  className={classes.chip}
                />
                <Chip
                  label="ReduxJS"
                  onClick={handleClick}
                  className={classes.chip}
                />
                <Chip
                  label="Flux"
                  onClick={handleClick}
                  className={classes.chip}
                />
              </div>
              <Typography type="title">AUTHORS</Typography>
              <div className={classes.authors}>{this.renderAuthor()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  wrapper: {
    width: 1000
  },
  header: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 4
  },
  content: {
    display: "flex"
  },
  left: {
    flex: 3,
    display: "flex",
    flexDirection: "column"
    // alignContent: 'flex-start',
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  tags: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  result: state.search.result
});

export default compose(
  withStyles(styles),
  reduxForm({
    form: "search-form"
  }),
  withRouter,
  connect(mapStateToProps)
)(SearchPage);
