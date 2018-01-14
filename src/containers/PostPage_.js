import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'
import { connect } from 'react-redux'
import { getPost, saveDraft, cleanCurrentPost } from '../actions/post'
import { withRouter } from 'react-router-dom'
import Loading from '../components/Loading'

const styles = theme => ({
})

class PostPage extends Component {


    renderView = () => {
        return (
            <PostEditor
                config={{
                    debug: true,
                    read_only: true
                }}
                content={this.props.currentPost.content}
            />
        )
    }

    renderPost = () => {
        return (
            <PostEditor
                config={{
                    upload_url: "http://localhost:9292/uploads/new",
                    debug: true,
                    read_only: false,
                    data_storage: {
                        interval: 250,
                        url: "/store",
                        save_handler: this.handleOnSave
                    }
                }}
            />
        )
    }

    renderEdit = () => {
        return (
            <PostEditor
                config={{
                    upload_url: "http://localhost:9292/uploads/new",
                    debug: true,
                    read_only: false,
                    data_storage: {
                        interval: 250,
                        url: "/store",
                        save_handler: this.handleOnSave
                    }
                }}
                content={this.props.currentPost.content}
            />
        )
    }

    renderLoading = (props) => (
        <Loading />
    )

    render() {
        const { isLoaded, readOnly, isEdit } = this.props
        
        if (!readOnly) {
            return this.renderPost()
        }
        if (isEdit) {
            return this.renderEdit()
        }
        if (isLoaded) {
            return this.renderView()
        }
        return this.renderLoading()

    }
}

// content !== null || !this.props.read_only ?
// <PostEditor config={{
//     upload_url: "http://localhost:9292/uploads/new",
//     debug: true,
//     read_only: this.props.read_only,
//     data_storage: {
//         interval: 1000,
//         url: "/store",
//         save_handler: this.handleOnSave
//     }
// }}
//     content={content}
// />
// : <div>Loading</div>
// )


PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => (
    {
        currentPost: state.post.current_post,
        isLoaded: state.post.is_loaded,
        isEdit: state.post.is_edit
    }
)

export default compose(
    withStyles(styles),
    withRouter,
    connect(mapStateToProps)
)(PostPage)