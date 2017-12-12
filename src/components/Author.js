import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import PostEditor from '../components/PostEditor'
import PostCard from '../components/PostCard'
import Chip from 'material-ui/Chip'
import Tabs, { Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'


const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    profile: {
        flex: 1
    }
})

const handleClick = () => {
    alert('You clicked the Chip.') // eslint-disable-line no-alert
}

class Author extends Component {

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
                <Avatar alt="Remy Sharp" src="https://cdn-images-1.medium.com/fit/c/60/60/1*51uPJMaa-1ibOoLRrDFI4Q.jpeg" className={classes.avatar} />
                <div className={classes.profile}>
                    <Typography type='title' gutterBottom>Long Nguyen</Typography>
                    <Typography type='subheading' gutterBottom>University of Foreign Language Studies University of Foreign Language Studies</Typography>
                </div>
            </div>
        )
    }
}

Author.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Author)