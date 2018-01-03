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
import { register } from '../actions/authenticate'
// compose
import compose from 'recompose/compose';

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

function SignUpForm(props) {
    // const { pristine, submitting, handleSubmit, dispatch, open } = props
    const { classes, handleSubmit, dispatch } = props;

    const handleSignUp = (payload) => {
        console.log('INSIDE authenticate')
        console.log(payload)
        dispatch(register.request(payload))
    };


    return (
        <div className={classes.container}>
            <Paper className={classes.root} elevation={4}>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <Typography type="headline" component="h2">Sign Up</Typography>
                    <Field
                        name="name"
                        component={renderTextField}
                        label="Your name"
                        type="text"
                        required={true}
                    />
                    <Field
                        name="email"
                        component={renderTextField}
                        label="Email"
                        type="email"
                        required={true}
                    />
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
                        <Button type="submit" raised color="primary" className={classes.button} >Sign Up</Button>
                        <Button color="accent" className={classes.button} component={Link} to="/sign-in" >Already have an account?</Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
}

SignUpForm.propTypes = {
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
)(SignUpForm);