import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})

class Sharing extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>

            </div>
        )
    }
}

export default withStyles(styles)(Sharing)