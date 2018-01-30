import React, { Component } from 'react';
import Button from "material-ui/Button/Button";
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import { putFollow } from '../actions/user';

const styles = (themes) => ({
    button: {
        marginLeft: themes.spacing.unit * 2
    }
})

class Follow extends Component {
    state = {
        following: this.props.following
    }

    handleFollowClick = () => {
        const { dispatch, userId } = this.props
        dispatch(putFollow.request({ userId }));
        this.setState({
            following: !this.state.following
        });
    }

    render() {
        const { classes } = this.props
        return (
            <Button onClick={this.handleFollowClick} className={classes.button}>
                {this.state.following ? "Following" : "Follow"}
            </Button>
        );
    }
}

Follow.PropTypes = {
    following: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired
}

export default compose(withStyles(styles), connect())(Follow)
