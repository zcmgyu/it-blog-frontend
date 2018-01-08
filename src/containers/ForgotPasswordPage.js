import React, { Component } from 'react'
import { ForgotPasswordEmail, ForgotPasswordReset } from '../components/ForgotPasswordForm'
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
        return (
            <Switch>
                <Route exact path="/" component={ForgotPasswordEmail} />
                <Route path="/reset" component={ForgotPasswordReset} />
            </Switch>
        )
    }
}

ForgotPasswordPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    statusText: state.auth.statusText
})

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'forgot-password'
    }),
    connect(mapStateToProps)
)(ForgotPasswordPage);
// <ForgotPasswordForm />