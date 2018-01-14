import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostEditor from '../PostEditor'
import { getPost } from '../../actions/post'

class ViewPost extends Component {
    componentWillMount () {
        const { dispatch, match } = this.props
        const { postId } = match.params
        dispatch(getPost.request({ postId }))
    }

    shouldComponentUpdate(nextProps, nextState) {
        const result = nextProps.currentPost !== this.props.currentPost
        return result
    }


    render() {
        const { isLoaded, currentPost } = this.props
        console.log(isLoaded)
        if (isLoaded) {
            return (
                <div>
                    <h1>VIEW</h1>
                    <PostEditor
                        config={{
                            debug: true,
                            read_only: true
                        }}
                        content={currentPost.content}
                    />
                </div>
            )
        }
        return (null)
    }
}


const mapStateToProps = (state) => (
    {
        currentPost: state.post.current_post,
        isLoaded: state.post.is_loaded
    }
)

export default connect(mapStateToProps)(ViewPost)