import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PostCard2 from '../components/PostCard2'
import Typography from 'material-ui/Typography'
import Tabs, { Tab } from 'material-ui/Tabs'



const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // flexWrap: 'wrap'
    },
    section: {
        maxWidth: '1032px',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap'
    },
    sessionTitle: {
        flex: '0 1 100%',
        padding: theme.spacing.unit
    },
    flexGrow: {
        flexGrow: 1
    }
})



class HomePage extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes } = this.props
        const { value } = this.state
        
        return (
            <div className={classes.container}>
                <div>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" href="#basic-tabs" />
                    </Tabs>
                </div>
                <div className={classes.section}>
                    <Typography type="title" className={classes.sessionTitle}>Category 1</Typography>
                    <PostCard2 />
                    <PostCard2 />
                    <PostCard2 />
                    <PostCard2 />
                </div>
                <div className={classes.section}>
                    <Typography type="title" className={classes.sessionTitle}>Category 2</Typography>
                    <PostCard2 />
                    <PostCard2 />
                    <PostCard2 />
                    <PostCard2 />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(HomePage)