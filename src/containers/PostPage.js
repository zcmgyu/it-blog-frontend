import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'
import { saveDraft, getPostRequest } from '../actions/post'
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

    componentDidMount() {
        const pathName = window.location.pathname
        const postId = pathName.slice(pathName.lastIndexOf('-') + 1, pathName.length)
        const { accessToken } = this.props
        if (this.props.read_only) {
            console.log('INSIDE DEBUG')
            this.props.dispatch(getPostRequest({postId, accessToken}))
        }
    }


    render() {
        return (
            <div>
                <PostEditor config={{
                    upload_url: "http://localhost:9292/uploads/new",
                    debug: true,
                    read_only: this.props.read_only,
                    data_storage: {
                        interval: 1000,
                        url: "/store",
                        save_handler: this.handleOnSave
                    }
                }}
                    content={this.props.content}
                />
            </div>
        )
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
    {
        accessToken: state.authReducer.accessToken,
        content: state.post.content
    }
)

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
)(PostPage);