import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../actions/error'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import compose from 'recompose/compose'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
})

class PushNotification extends React.Component {
    state = {
        // open: false,
        vertical: 'top',
        horizontal: 'right',
    }

    //   handleClick = state => () => {
    //     this.setState({ open: true, ...state })
    //   }

    handleClose = () => {
        this.props.resetErrorMessage()
    }

    render() {
        const { vertical, horizontal } = this.state
        const { message, classes, open } = this.props
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { open, message } = state.error
    return {
        open,
        message
    }
}

const mapDispatchToProps = dispatch => ({ resetErrorMessage: () => dispatch(resetErrorMessage()) })


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(PushNotification)