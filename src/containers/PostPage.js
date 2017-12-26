import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'
import { saveDraft } from '../actions/post'
import { connect } from 'react-redux'

const styles = theme => ({
});

class PostPage extends Component {

    handleOnSave = (editorContext, content) => {
        console.log("SAVING DATA!!");
        console.info({
            editor_content: JSON.stringify(content),
            text_content: editorContext.getTextFromEditor(content)
        });
        this.props.dispatch(saveDraft(content))
    }
    

    handleImageDelete = (value) => {
        console.log("test delete callback")
        console.log(value)
    }

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
                        save_handler: this.handleOnSave
                    }
                }} />
            </div>
        )
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect()
)(PostPage);