import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostEditor from '../PostEditor'
import { saveDraft } from '../../actions/post'
import { cleanCurrentPost } from '../../actions/post'

class CreatePost extends Component {
    componentWillMount() {
        this.props.dispatch(cleanCurrentPost())
    }


    handleOnSave = (editorContext, content) => {
        console.info({
            editor_content: JSON.stringify(content),
            text_content: editorContext.getTextFromEditor(content)
        })
        // Get short content
        const rawText = editorContext.getTextFromEditor(content)
        const removedFirstLine = rawText.substring(rawText.indexOf('\n') + 1)
        const rawContent = removedFirstLine.replace(/[\n\r]+/g, '\n');
        this.props.dispatch(saveDraft.request({content, rawContent}))
    }


    render() {
        return (
            <div>
                <h1>CREATE</h1>
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
            </div>
        )
    }
}

export default connect()(CreatePost)