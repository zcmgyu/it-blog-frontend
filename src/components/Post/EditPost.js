import React from 'react'
import { connect } from 'react-redux'
import PostEditor from '../PostEditor'
import { getPost, saveDraft } from '../../actions/post'

const Edit = (props) => {
    const { dispatch, isLoaded, currentPost, match, authorId, userId } = props
    const { postId } = match.params

    const handleOnSave = (editorContext, content) => {
        console.info({
            editor_content: JSON.stringify(content),
            text_content: editorContext.getTextFromEditor(content)
        })
        props.dispatch(saveDraft.request(content))
    }

    if (isLoaded && authorId === userId) {
        return (
            <div>
                <h1>EDIT</h1>
                <PostEditor
                    config={{
                        upload_url: "http://localhost:9292/uploads/new",
                        debug: true,
                        read_only: false,
                        data_storage: {
                            interval: 250,
                            url: "/store",
                            save_handler: handleOnSave
                        }
                    }}
                    content={currentPost.content}
                />
            </div>

        )
    }
    dispatch(getPost.request({ postId }))
    return (null)
    // return (<h1>EDIT</h1>)
}

const mapStateToProps = (state) => (
    {
        currentPost: state.post.current_post,
        isLoaded: state.post.is_loaded,
        authorId: state.post.current_post.authorId,
        userId: state.user.current_user_info.id
    }
)

export default connect(mapStateToProps)(Edit)