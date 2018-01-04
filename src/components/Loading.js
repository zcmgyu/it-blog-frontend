import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
    progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) !important'
    },
    
});

function Loading(props) {
    const { classes } = props;
    return (
        <div>
            <CircularProgress className={classes.progress} color="accent" thickness={7} />
        </div>
    );
}

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);