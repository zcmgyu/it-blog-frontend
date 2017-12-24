import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { logoutUserRequest } from "../actions/authentication";
import { resquestPostDisplay } from "../actions/post";


const menu = [
    {
        name: 'My page',
        uri: '/mypage'
    },
    {
        name: 'Create post',
        uri: '/post'
    },
    {
        name: 'Logout',
        uri: '/logout'
    }
]

class PopoverMenu extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleMenuClick = (uri) => () => {
        if (uri === '/logout') {
            localStorage.removeItem('state');
            this.props.dispatch(logoutUserRequest())
        } else if (uri == '/post') {
            this.props.dispatch(resquestPostDisplay())
        } else {

        }
        this.props.dispatch(push(uri))
        this.handleClose();
    }



    renderMenuList = () => (
        menu.map((item, index) =>
            (<MenuItem key={index} onClick={this.handleMenuClick(item.uri)}>{item.name}</MenuItem>)
        )
    )

    render() {
        return (
            <div>
                <IconButton
                    aria-owns={true ? 'simple-menu' : null}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleClick}
                >
                    {this.props.children}
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {this.renderMenuList()}
                </Menu>
            </div>
        );
    }
}


const mapStateToProps = (state) => (
    {

    }
)

export default connect(mapStateToProps)(PopoverMenu)