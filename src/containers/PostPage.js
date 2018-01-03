import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import PostEditor from '../components/PostEditor'
import { connect } from 'react-redux'
import { getPost, saveDraft } from '../actions/post';
import { withRouter } from 'react-router-dom'

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
        console.log(this.props.current_post)
        // this.data = {"entityMap":{},"blocks":[{"key":"761n6","text":"11111","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}
    }


    componentDidMount() {
        console.log('componentDidMount')
        // console.log(this.props)
        const pathName = window.location.pathname
        const postId = pathName.slice(pathName.lastIndexOf('-') + 1, pathName.length)
        console.log('this.props.read_only')
        console.log(this.props.read_only)
        if (this.props.read_only) {
            this.props.dispatch(getPost.request({ postId }))
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !nextProps.current_post === this.props.current_post
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }

    // renderPost = (content) => (
    //     {
    //         if(content !== null) {

    //         } else {
    //         < div > LOADING...</div>
    //     }}
    // )


    render() {

        console.log('Inside render')
        const { content } = this.props.current_post
        return (
            content !== null || !this.props.read_only ?
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
                    content={content}
                />
                : <div>Loading</div>
        )
    }
}




PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
    {
        current_post: state.post.current_post
    }
)

export default compose(
    withStyles(styles),
    withRouter,
    connect(mapStateToProps)
)(PostPage);