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
        // marginBottom: theme.spacing.unit,
    },
    link: {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center'
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

function SignInForm(props) {
    // const { pristine, submitting, handleSubmit, dispatch, open } = props
    const { classes, handleSubmit, dispatch } = props;

    const handleSignIn = (data) => {
        dispatch(authenticate.request(data))
    };

    return (
        <div className={classes.container}>
            <Paper className={classes.root} elevation={4}>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <Typography type="headline" component="h2">Sign In</Typography>
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
                    <div className={classes.actionContainer}>
                        <Button type="submit" raised color="primary" className={classes.button} >Sign In</Button>
                        <Button color="accent" className={classes.button} component={Link} to="/sign-up" >{`Don't have an account`}</Button>
                        <Typography type='body2' className={classnames(classes.button, classes.link)} component={Link} to="/forgot-password" >
                            Lost your password?
                        </Typography>
                    </div>
                </form>
            </Paper>
        </div>
    );
}

SignInForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    statusText: state.auth.statusText
})

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'simple'
    }),
    connect(mapStateToProps)
)(SignInForm);