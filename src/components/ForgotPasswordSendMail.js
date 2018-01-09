// React
import React from 'react';
// React-Redux
import { connect } from 'react-redux'
// React Router
import { Route, Switch } from 'react-router-dom'
import compose from 'recompose/compose'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { forgotPassword } from '../actions/user'
import Loading from './Loading'


// REDUX-FORM
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




export const ForgotPasswordSendEmail = (props) => {
    const { handleSubmit, classes, dispatch, loading } = props

    const handleSendMail = (data) => {
        dispatch(forgotPassword.request(data))
    };

    console.log("loading");
    console.log(loading);

    return (
        <form onSubmit={props.handleSubmit(handleSendMail)}>
            <Typography type="headline" component="h2">Forgot Password</Typography>
            <Typography type="body1" component="p">
                {`Enter your email address and we'll send you a link to reset your password.`}
            </Typography>
            <Field
                name="email"
                component={renderTextField}
                label="Email"
                type='email'
                required={true}
            />
            <div className={classes.actionContainer}>
                <Button type="submit" raised color="primary" disabled={loading} className={classes.button} >Submit</Button>
            </div>
            {loading ? <h1>FUCK</h1> : null}
            {loading && <Loading />}
        </form>
    )
}

ForgotPasswordSendEmail.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    loading: state.user.send_mail.loading
})

export default compose(
    withStyles(styles),
    reduxForm({
        form: 'forgot-password'
    }),
    connect(mapStateToProps)
)(ForgotPasswordSendEmail);
