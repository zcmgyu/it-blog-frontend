import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import PostCard from '../components/PostCard'
import Chip from 'material-ui/Chip';
import Tabs, { Tab } from 'material-ui/Tabs';


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
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
        // alignContent: 'flex-start',
    },
    right: {
        flex: 2
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: theme.spacing.unit,
    }
});

const handleClick = () => {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class TagPage extends Component {

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
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <Typography type='headline'>TAGGED IN</Typography>
                        <Typography type='title' gutterBottom>ReactJS</Typography>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.left}>
                            <Typography type='title'>Related tags</Typography>
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

                        </div>
                        <div className={classes.right}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Top Post" />
                                <Tab label="Latest Post" />
                                <Tab label="Top Writer" />
                            </Tabs>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TagPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagPage);