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
import IconButton from 'material-ui/IconButton'
// import MenuIcon from 'material-ui-icons/Menu'
import LoginDialog from '../components/LoginDialog'
// import Avatar from 'material-ui/Avatar'
// import Menu, { MenuItem } from 'material-ui/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import TextField from 'material-ui/TextField'
import Notification from './Nofitication'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Publish from './Publish'
import PopoverMenu from './PopoverMenu'
import Avatar from 'material-ui/Avatar'


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

// const handleMenu = () => {

// }


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

    
    componentDidMount() {
        console.log("PRINT OUT PATH NAME")
        console.log(this.context.router)
    }
    

    render() {
        const { classes, title, toggleLoginDialog, loginDialogState, isAuthenticated, isPost } = this.props
        const currentPath = window.location.pathname
        return (
            <div className={classes.root} >

                <AppBar position="static" className={classes.fixedPosition} color="white">
                    <Toolbar>
                        <Typography type="title" color="inherit" className={classes.flex}>{title}</Typography>
                        {currentPath.includes('/post') &&  <Publish />}
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
                                <Button color="inherit" onClick={(e) => toggleLoginDialog()}>Login</Button>
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
    isAuthenticated: state.authReducer.isAuthenticated,
    isPost: state.post.isPost
})

const mapDispatchToProps = dispatch => ({
    toggleLoginDialog: bindActionCreators(toggleLoginDialog, dispatch),
})

export default compose(
    withStyles(styles, {
        name: 'NavigationBar',
    }),
    connect(mapStateToProps, mapDispatchToProps),
)(NavigationBar)