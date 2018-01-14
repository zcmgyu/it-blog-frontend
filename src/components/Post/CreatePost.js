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
        this.props.dispatch(saveDraft.request(content))
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