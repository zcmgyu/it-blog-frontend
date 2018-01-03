// REACT-REDUX
import React from 'react';
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
import { authenticate } from '../actions/authenticate'


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
    const { pristine, submitting, handleSubmit, dispatch, open } = props
    const handleRequestClose = () => {
        dispatch(toggleLoginDialog())
    };

    const handleLogin = (data) => {
        dispatch(authenticate.request(data))
    };

    const handleRegister = () => {

    }

    return (
        <Dialog onRequestClose={handleRequestClose} open={open} >
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
    isAuthenticated: state.auth.isAuthenticated,
    statusText: state.auth.statusText
})

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'simple',
        validate
    }),
    connect(mapStateToProps)
)(LoginDialog);