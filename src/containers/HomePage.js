import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PostCard2 from '../components/PostCard2'
import Typography from 'material-ui/Typography'
import Tabs, { Tab } from 'material-ui/Tabs'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getTop4ByCategory } from "../actions/post";

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

    
    componentWillMount() {
        this.props.dispatch(getTop4ByCategory.request({type: 'latest'}))
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    renderSection(props) {
        const { classes } = props
        return (
            <div className={classes.section}>
                <Typography type="title" className={classes.sessionTitle}>Category 1</Typography>
                <PostCard2 />
                <PostCard2 />
                <PostCard2 />
                <PostCard2 />
            </div>
        )
    }

    render() {
        const { classes } = this.props
        const { value } = this.state

        return (
            <div className={classes.container}>
                <div>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Trend" />
                        <Tab label="Latest" />
                        <Tab label="Following" href="#basic-tabs" />
                    </Tabs>
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

export default compose(
    withStyles(styles),
    withRouter,
    connect()
)(HomePage)