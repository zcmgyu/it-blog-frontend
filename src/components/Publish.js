import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Popover from 'material-ui/Popover'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'
import PublishModal from './PublishModal'

const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    }
})

class Publish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            anchorEl: null,
        };

        this.button = 'abc';

    }

    handleClickButton() {
        console.log('this.button')
        console.log(this.button)
        this.setState({
            open: true,
            anchorEl: findDOMNode(this.button),
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes } = this.props
        const {
            open,
            anchorEl
        } = this.state
        return (
            <div>
                <Button
                    className={classes.button}
                    color="default"
                    ref={node => {
                        this.button = node;
                    }}
                    onClick={this.handleClickButton.bind(this)}
                >
                    Publish
                <FileUpload className={classes.rightIcon} />
                </Button>

                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    anchorPosition={{ top: 400, left: 400 }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'top',
                    }}
                    anchorReference={'anchorEl'}
                    onRequestClose={this.handleRequestClose}
                >
                    <PublishModal />
                </Popover>
            </div>
        )
    }
}

Publish.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Publish);