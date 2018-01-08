import React, { Component } from 'react'
import ForgotPasswordSendMail from '../components/ForgotPasswordSendMail'
import ForgotPasswordReset from '../components/ForgotPasswordReset'
import { Route, Switch } from 'react-router-dom'

// compose
import compose from 'recompose/compose'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

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
            </div>
        )
    }
}

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'forgot-password'
    })
)(ForgotPasswordPage);
