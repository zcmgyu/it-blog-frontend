import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleLoginDialog } from '../actions/dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import LoginDialog from '../components/LoginDialog'
import TextField from 'material-ui/TextField'
import Notification from './Nofitication'
import Publish from './Publish'
import EditButton from './EditButton'
import PopoverMenu from './PopoverMenu'
import Avatar from 'material-ui/Avatar'
import { Route, Switch, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'


const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        paddingTop: 56,
        width: '100%',
    },
    flex: {
        flex: 1,
        textDecoration: 'none',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    fixedPosition: {
        left: 0,
        position: "fixed",
        top: 0
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    badge: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
    formControl: {
        minWidth: 120,
    }
})

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublish: window.location.pathname === '/post'
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    showMenu = () => {

    }

    render() {
        const { classes, title, loginDialogState, isAuthenticated } = this.props
        return (
            <div className={classes.root} >

                <AppBar position="static" className={classes.fixedPosition} color='inherit'>
                    <Toolbar>
                        <Typography type="title" color="inherit" className={classes.flex} component={Link} to="/">{title}</Typography>
                        <Switch>
                            <Route exact path="/posts" component={Publish} />
                            <Route exact path="/posts/:post_path" component={EditButton} />
                            <Route exact path="/posts/:post_path/edit" component={Publish} />
                        </Switch>

                        <TextField
                            id="search"
                            label="Search"
                            type="search"
                            className={classes.textField}
                        />
                        <Notification />
                        {
                            isAuthenticated ?
                                <PopoverMenu>
                                    <Avatar alt="Remy Sharp" src="https://cdn-images-1.medium.com/fit/c/100/100/0*bh4kZqN3bPPuk15J.jpg" className={classes.avatar} />
                                </PopoverMenu>
                                :
                                <Button color="inherit" component={Link} to="/sign-in">Sign In</Button>
                        }
                    </Toolbar>

                </AppBar>

                <LoginDialog open={loginDialogState} />
            </div>
        )
    }


}
// <Button color="contrast" href="/mypage">My Page</Button> 
// <IconButton>
// <Avatar alt="Remy Sharp" src="https://material-ui-1dab0.firebaseapp.com/static/images/remy.jpg" className={classes.avatar} />
// </IconButton>
NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    loginDialogState: state.dialog.loginDialogState,
    isAuthenticated: state.auth.isAuthenticated,
    isPost: state.post.isPost
})

const mapDispatchToProps = dispatch => ({
    toggleLoginDialog: bindActionCreators(toggleLoginDialog, dispatch),
    pushLocation: bindActionCreators(push, dispatchEvent)
})

export default compose(

    withStyles(styles, {
        name: 'NavigationBar',
    }),
    // Render Router with Redux
    // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(NavigationBar)