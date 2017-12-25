import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'

const styles = theme => ({
});

class PostPage extends Component {
    render() {
        return (
            <div>
                <PostEditor config={{ debug: true, read_only: this.props.read_only }} />
            </div>
        )
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostPage);