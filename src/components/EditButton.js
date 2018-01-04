import React from 'react';



const EditButton = (props) => {
    if()
    return (
        <Button raised className={classes.button}>
            Edit
        </Button>
    )
}

const mapStateToProps = state => (
    {
        authorId: state.post.current_post.authorId
    }
)

const mapDispatchToProps = props => {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditButton)
