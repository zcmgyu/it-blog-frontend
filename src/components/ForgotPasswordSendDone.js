// React
import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// React Router
import compose from 'recompose/compose'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'


// REDUX-FORM
import { push } from 'react-router-redux'

const styles = theme => ({
    root: {
        maxWidth: 400,
        padding: theme.spacing.unit * 2
    },
    button: {
        marginTop: theme.spacing.unit * 2,
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    }
})

export const ForgotPasswordSendDone = (props) => {
    const { classes } = props

    const handleClick = (data) => {
        props.dispatch(push('/sign-in'))
    }

    return (
        <div>
            <Typography type="headline" component="h2">Forgot Password</Typography>
            <Typography type="body1" component="p">
                {props.message || 'NO MESSAGE'}
            </Typography>
            <div className={classes.actionContainer}>
                <Button type="submit" raised color="primary" className={classes.button} onClick={handleClick} >Go to Sign-in page</Button>
            </div>
        </div>
    )
}

ForgotPasswordSendDone.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    message: state.user.send_mail.message
})

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
)(ForgotPasswordSendDone)
