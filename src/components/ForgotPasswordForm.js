// React
import React from 'react';
// React-Redux
import { connect } from 'react-redux'
// React Router
import { Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { forgotPassword } from '../actions/user'


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

// export const renderRouter = () => (
//     <Switch>
//         <Route exact path="/" component={ForgotPasswordEmail} />
//         <Route path="/reset" component={ForgotPasswordReset} />
//     </Switch>
// )

const handleSendMail = (data) => {
    // dispatch(forgotPassword.request(data))
};

export const ForgotPasswordEmail = (props) => {
    const { handleSubmit, classes } = props
    return (
        <form onSubmit={props.handleSubmit(this.handleSendMail)}>
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
                <Button type="submit" raised color="primary" className={classes.button} >Submit</Button>
            </div>
        </form>
    )
}

export const ForgotPasswordReset = (props) => {
    const { handleSubmit, classes } = props
    return (
        <form onSubmit={handleSubmit(handleSendMail)}>
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



// const ForgotPasswordForm = (props) => {
//     const { classes, handleSubmit, dispatch } = props;

//     return (
//         <div className={classes.container}>
//             <Paper className={classes.root} elevation={4}>
//                 {renderRouter()}
//             </Paper>
//         </div>
//     );
// }

// ForgotPasswordForm.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     statusText: state.auth.statusText
// })

// export default compose(
//     withStyles(styles),
//     reduxForm({
//         form: 'forgot-password'
//     }),
//     connect(mapStateToProps)
// )(ForgotPasswordForm);