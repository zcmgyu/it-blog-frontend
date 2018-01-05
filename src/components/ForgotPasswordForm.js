// React
import React from 'react';
// React-Redux
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { authenticate } from '../actions/authenticate'
// compose
import compose from 'recompose/compose';
import classnames from 'classnames'

// REDUX-FORM
import { Field, reduxForm } from 'redux-form'
// React Router
import { Link } from 'react-router-dom'

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

function ForgotPasswordForm(props) {
    const { classes, handleSubmit, dispatch } = props;
    const handleSendMail = (data) => {
        dispatch(authenticate.request(data))
    };

    return (
        <div className={classes.container}>
            <Paper className={classes.root} elevation={4}>
                <form onSubmit={handleSubmit(handleSendMail)}>
                    <Typography type="headline" component="h2">Forgot Password</Typography>
                    <Typography type="body1" component="p">
                        Enter your email address and we'll send you a link to reset your password.
                    </Typography>
                    <Field
                        name="email"
                        component={renderTextField}
                        label="Email"
                        type='email'
                        required={true}
                    />
                    <div className={classes.actionContainer}>
                        <Button type="submit" raised color="primary" className={classes.button} >Submit</Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
}

ForgotPasswordForm.propTypes = {
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
)(ForgotPasswordForm);