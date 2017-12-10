import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'

const styles = theme => ({
});

class PostPage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <PostEditor config={{ debug: true, read_only: false }} />
            </div>
        )
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostPage);