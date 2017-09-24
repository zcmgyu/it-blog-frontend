import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class LoginForm extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.container}>
                <form>
                    <FormControl className={classes.formControl} error={false}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" value={this.state.username} onChange={this.handleChange} />
                        <FormHelperText>Username</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl} error={false}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        <FormHelperText>Password</FormHelperText>
                    </FormControl>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);