import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleLoginDialog } from '../actions/dialog'
import { loginUserRequest } from '../actions/authentication'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import LoginDialog from '../components/LoginDialog'

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        paddingTop: 56,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    fixedPosition: {
        left: 0,
        position: "fixed",
        top: 0
    }
});


function ButtonAppBar(props) {
    const { classes, title, toggleLoginDialog, loginDialogState, loginUserRequest } = props;
    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.fixedPosition}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>{title}</Typography>
                    {/*<Button color="contrast" href="/login">Login</Button> */}
                    <Button color="contrast" onClick={(e) => toggleLoginDialog()}>Login</Button>
                </Toolbar>
            </AppBar>
            <LoginDialog open={loginDialogState} onRequestClose={(e) => toggleLoginDialog()} onRequestLogin={(e) => loginUserRequest()}/>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    loginDialogState: state.dialog.loginDialogState
})

const mapDispatchToProps = dispatch => ({
    toggleLoginDialog: bindActionCreators(toggleLoginDialog, dispatch),
    loginUserRequest: bindActionCreators(loginUserRequest, dispatch)
})

export default compose(
    withStyles(styles, {
        name: 'ButtonAppBar',
    }),
    connect(mapStateToProps, mapDispatchToProps),
)(ButtonAppBar);