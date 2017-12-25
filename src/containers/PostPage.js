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
                <PostEditor config={{
                    upload_url: "http://localhost:9292/uploads/new",
                    debug: true,
                    read_only: this.props.read_only,
                    data_storage: {
                        interval: 2000,
                        url: "/store",
                        save_handler: function (ctx, content) {
                            console.log("SAVING DATA!!");
                            console.info({
                                editor_content: JSON.stringify(content),
                                text_content: ctx.getTextFromEditor(content)
                            });
                        }
                    }
                }} />
            </div>
        )
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostPage);