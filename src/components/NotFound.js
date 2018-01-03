import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    root: {
        display: 'flex',
        // flexDirection: 'column',
        // alignContent: 'center',
        justifyContent: 'center'

    },
    wrapper: {
        maxWidth: 500
    }
});

const NotFound = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.wrapper} >
                <Typography type="headline" component="h3">
                    Page Not Found
                </Typography>
                <Typography component="p">
                    This file does not exist and there was no index.html found in the current directory or 404.html in the root directory.
                </Typography>
            </div>
        </div>
    )
};


export default withStyles(styles)(NotFound);
