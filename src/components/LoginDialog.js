import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// import Avatar from 'material-ui/Avatar';
// import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

// import PersonIcon from 'material-ui-icons/Person';
// import AddIcon from 'material-ui-icons/Add';
// import Typography from 'material-ui/Typography';
// import blue from 'material-ui/colors/blue';


export default class LoginDialog extends Component {
    state = {
        name: 'Composed TextField',
    }

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    handleLogin = () => {
        this.props.onRequestLogin();
    };

    handleRegister = () => {
        
    }

    render() {
        const { ...other } = this.props
        return (
            <Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <FormControl error={false} fullWidth={true}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" value={this.state.username} onChange={this.handleChange} />
                        {/* <FormHelperText>{error}</FormHelperText> */}
                    </FormControl>
                    <FormControl error={false} fullWidth={true}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        {/*<FormHelperText>Password</FormHelperText>*/}
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleRegister} color="primary">
                        Register
                </Button>
                    <Button onClick={this.handleLogin} color="primary">
                        Login
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}