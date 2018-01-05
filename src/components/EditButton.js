import React from 'react';
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import { push } from 'react-router-redux';
import { editPostTrigger } from '../actions/post'


const styles = theme => ({
    button: {
        margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
    }
})

const EditButton = (props) => {
    const { classes, authorId, userId } = props

    const handleClick = (e) => {
        const { dispatch } = props
        const current = window.location.pathname
        dispatch(editPostTrigger())
        dispatch(push(current + '/edit'))
    }

    if (authorId === userId) {
        return (
            <Button className={classes.button} onClick={handleClick}>
                Edit
            </Button>
        )
    } else {
        return null
    }
}

const mapStateToProps = state => (
    {
        authorId: state.post.current_post.authorId,
        userId: state.user.current_user_info._id
    }
)

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
)(EditButton)
