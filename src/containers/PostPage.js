import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'
import { connect } from 'react-redux'
import { getPost, saveDraft, cleanCurrentPost } from '../actions/post';
import { withRouter } from 'react-router-dom'
import Loading from '../components/Loading'

const styles = theme => ({
});

class PostPage extends Component {

    handleOnSave = (editorContext, content) => {
        console.log("SAVING DATA!!");
        console.info({
            editor_content: JSON.stringify(content),
            text_content: editorContext.getTextFromEditor(content)
        });
        this.props.dispatch(saveDraft.request(content))
    }


    handleImageDelete = (value) => {
    }


    componentWillMount() {
        console.log('INSIDE COMPONENT WILL MOUNT')
        console.log(this.props)
        this.props.dispatch(cleanCurrentPost())
    }


    componentDidMount() {
        console.log('componentDidMount')
        const pathName = window.location.pathname
        const postId = pathName.slice(pathName.lastIndexOf('-') + 1, pathName.length)
        if (this.props.read_only) {
            this.props.dispatch(getPost.request({ postId }))
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        const result = nextProps.current_post !== this.props.current_post
        return result
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }

    renderViewer = () => {
        return (
            <PostEditor config={{
                debug: true,
                read_only: this.props.isEdit
            }}
                content={this.props.current_post.content}
            />
        )
    }

    renderPost = () => (
        <PostEditor config={{
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

    renderLoading = (props) => (
        <Loading />
    )

    render() {
        const { isLoaded } = this.props
        if (!this.props.read_only) {
            console.log("RENDER POST")
            return this.renderPost()
        }
        if (isLoaded) {
            console.log("RENDER VIEWER")
            return this.renderViewer()
        } else {
            console.log("RENDER LOADING")
            return this.renderLoading()
        }

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
};

const mapStateToProps = (state) => (
    {
        current_post: state.post.current_post,
        isLoaded: state.post.isLoaded,
        isEdit: state.post.isEdit
    }
)

export default compose(
    withStyles(styles),
    withRouter,
    connect(mapStateToProps)
)(PostPage);