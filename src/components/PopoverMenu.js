import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'



const menu = [
    {
        name: 'My page',
        uri: '/mypage'
    },
    {
        name: 'Create post',
        uri: '/posts'
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