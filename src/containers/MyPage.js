import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';

// MATERIAL UI
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Tabs, { Tab } from 'material-ui/Tabs';


// ACTIONS

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    profile: {
        width: '660px',
        display: 'flex',
    },
    hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },

    heroAvatar: {

    },
    avatar: {
        // flex: 0,
        margin: 10,
        width: 100,
        height: 100,
    }
};

class MyPage extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.profile}>
                    <Avatar
                        alt='Long Nguyen'
                        src='https://cdn-images-1.medium.com/fit/c/100/100/0*bh4kZqN3bPPuk15J.jpg'
                        className={classes.avatar}
                    />
                    <div className={classes.hero}>
                        <Typography type='headline' gutterBottom>Long Nguyen</Typography>
                        <Typography type='subheading' gutterBottom>University of Foreign Language Studies</Typography>
                    </div>
                </div>
                <div className={classes.content}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        fullWidth
                    >
                        <Tab label='Item One' />
                        <Tab label='Item Two' />
                        <Tab label='Item Three' />
                        <Tab label='Item Four' />
                        <Tab label='Item Three' />
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MyPage)

// <Button onClick={(e) => this.props.dispatch(logoutUserRequest())}>Logout</Button>

