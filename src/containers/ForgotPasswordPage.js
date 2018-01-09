import React, { Component } from 'react'
import ForgotPasswordSendMail from '../components/ForgotPasswordSendMail'
import ForgotPasswordReset from '../components/ForgotPasswordReset'
import ForgotPasswordSendDone from '../components/ForgotPasswordSendDone'
import { Route } from 'react-router-dom'

// compose
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
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
});

class ForgotPasswordPage extends Component {
    render() {
        const { match, classes } = this.props
        return (
            <div className={classes.container}>
                <Route exact path={match.url} component={ForgotPasswordSendMail} />
                <Route path={`${match.url}/reset`} component={ForgotPasswordReset} />
                <Route path={`${match.url}/done`}  component={ForgotPasswordSendDone} />
            </div>
        )
    }
}

export default compose(
    withStyles(styles),
)(ForgotPasswordPage);



