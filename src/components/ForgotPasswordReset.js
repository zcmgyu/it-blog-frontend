// React
import React from 'react';
// React-Redux
import { connect } from 'react-redux'
// React Router
import compose from 'recompose/compose'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { resetPassword } from '../actions/user'


// REDUX-FORM
import { Field, reduxForm } from 'redux-form'
// import { URLSearchParams } from 'url';

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

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
        <TextField
            label={label}
            helperText={touched && error}
            error={touched && error != null}
            fullWidth
            {...input}
            {...custom}
        />
    )
};

export const ForgotPasswordReset = (props) => {
    const { handleSubmit, classes, dispatch } = props

    const handleResetPassword = (data) => {
        // Add token
        const searchParams = new URLSearchParams(props.location.search)
        const token = searchParams.get('token')
        data = { ...data, token }
        dispatch(resetPassword.request(data))
    };

    return (
        <form onSubmit={handleSubmit(handleResetPassword)}>
            <Typography type="headline" component="h2">Reset Password</Typography>
            <Field
                name="password"
                component={renderTextField}
                label="Password"
                type='password'
                required={true}
            />
            <Field
                name="confirmPassword"
                component={renderTextField}
                label="Confirm Password"
                type='password'
                required={true}
            />
            <div className={classes.actionContainer}>
                <Button type="submit" raised color="primary" className={classes.button} >Submit</Button>
            </div>
        </form>
    )
}

ForgotPasswordReset.propTypes = {
    classes: PropTypes.object.isRequired,
};

const validate = (values, props) => {
    const errors = {};
    const { password, confirmPassword } = values
    if (password !== confirmPassword) {
        errors.confirmPassword = "Password does not match the confirm password."
    }
    if (props.message) {
        errors.confirmPassword = props.message
    }
    console.log('errors')
    console.log(errors)
    return errors;
}

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'forgot-password',
        validate
    }),
    connect()
)(ForgotPasswordReset);