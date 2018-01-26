import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import Tabs, { Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Author from '../components/Author'


const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper: {
        width: 1000
    },
    header: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 4
    },
    content: {
        display: 'flex',
    },
    left: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column'
        // alignContent: 'flex-start',
    },
    right: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: theme.spacing.unit,
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    }
})

const handleClick = () => {
    alert('You clicked the Chip.') // eslint-disable-line no-alert
}

class TagPage extends Component {

    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }


    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <TextField
                            id="search"
                            label="Search"
                            type="search"
                            className={classes.textField}
                            fullWidth
                        />
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label="Posts" />
                            <Tab label="Authors" />
                            <Tab label="Tags" />
                        </Tabs>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.left}>

                            <Typography type='title' gutterBottom>POSTS</Typography>
                            <div className={classes.posts}>
                                
                            </div>
                        </div>
                        <div className={classes.right}>
                            <Typography type='title'>TAGS</Typography>
                            <div className={classes.tags}>
                                <Chip
                                    label="AngularJS"
                                    onClick={handleClick}
                                    className={classes.chip}
                                />
                                <Chip
                                    label="NodeJS"
                                    onClick={handleClick}
                                    className={classes.chip}
                                />
                                <Chip
                                    label="ReduxJS"
                                    onClick={handleClick}
                                    className={classes.chip}
                                />
                                <Chip
                                    label="Flux"
                                    onClick={handleClick}
                                    className={classes.chip}
                                />
                            </div>
                            <Typography type='title'>AUTHORS</Typography>
                            <div className={classes.authors}>
                                <Author />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TagPage.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TagPage)


// <PostCard />
//                                 <PostCard />
//                                 <PostCard />