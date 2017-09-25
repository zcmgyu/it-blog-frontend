// REACT-REDUX
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux'

// MATERIAL UI
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

// REDUX-FORM
import validate from '../validation/login'
import { Field, reduxForm } from 'redux-form'

// ACTIONS
import { toggleLoginDialog } from '../actions/dialog'
import { loginUserRequest } from '../actions/authentication'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
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

const LoginDialog = (props) => {

    const { classes, pristine, reset, submitting, handleSubmit, dispatch, ...other } = props
    const handleRequestClose = (props) => {
        dispatch(toggleLoginDialog())
    };
    
    const handleLogin = (data) => {
        dispatch(loginUserRequest(data))
    };
    
    const handleRegister = () => {
    
    }
    return (
        <Dialog onRequestClose={handleRequestClose} {...other} >
            <form onSubmit={handleSubmit(handleLogin)}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Field
                        name="username"
                        component={renderTextField}
                        label="Username"
                        required={true}
                    />
                    <Field
                        name="password"
                        component={renderTextField}
                        label="Password"
                        type="password"
                        required={true}
                    />
                    <DialogContentText>
                        {props.statusText}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleRegister} color="primary" disabled={pristine || submitting} >Register</Button>
                    <Button type="submit" label="login" className="button-submit" color="primary" disabled={pristine || submitting} >Login</Button>
                </DialogActions>
            </form>

        </Dialog >

    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    statusText: state.authReducer.statusText
})

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'simple',
        validate
    }),
    connect(mapStateToProps)
)(LoginDialog);