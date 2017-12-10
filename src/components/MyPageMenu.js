import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class MyPageMenu extends Component {
    state = {
        anchorEl: null,
        open: false,
    };
    
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    
    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button
                    aria-owns={this.state.open ? 'mypage-menu' : null}
                    aria-haspopup="true"
                    onClick={() => this.handleClick()}
                >
                    Open Menu
        </Button>
                <Menu
                    id="mypage-menu"
                    anchorEl={state.anchorEl}
                    open={state.open}
                    onRequestClose={() => this.handleRequestClose()}
                >
                    <MenuItem onClick={() => this.handleRequestClose()}>Profile</MenuItem>
                    <MenuItem onClick={() => this.handleRequestClose()}>My account</MenuItem>
                    <MenuItem onClick={() => this.handleRequestClose()}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default MyPageMenu;