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
        // Get short content
        const rawText = editorContext.getTextFromEditor(content)
        const removedFirstLine = rawText.substring(rawText.indexOf('\n') + 1)
        const rawContent = removedFirstLine.replace(/[\n\r]+/g, '\n');
        // const shortContent = withoutBreaks.trim().substring(0, 156);

        props.dispatch(saveDraft.request({content, rawContent}))
    }
    if (isLoaded && authorId === userId) {
        return (
            <div>
                <PostEditor
                    config={{
                        upload_url: "/uploads/new",
                        debug: true,
                        read_only: false,
                        api_key: "86c28a410a104c8bb58848733c82f840",
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
}

const mapStateToProps = (state) => (
    {
        currentPost: state.post.current_post,
        isLoaded: state.post.is_loaded,
        authorId: state.post.current_post.author.id,
        userId: state.user.current_user_info.id
    }
)

export default connect(mapStateToProps)(Edit)