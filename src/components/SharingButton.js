import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import {
    ShareButtons,
    // ShareCounts,
    generateShareIcon,
    // shareLinks,
} from 'react-share'
import Typography from 'material-ui/Typography'
import ShareIcon from 'material-ui-icons/Share'
import ContentCopy from 'material-ui-icons/ContentCopy'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Snackbar from 'material-ui/Snackbar'
import CloseIcon from 'material-ui-icons/Close'

const {
    FacebookShareButton,
    TwitterShareButton,
    GooglePlusShareButton,
    EmailShareButton,
  } = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')
const EmailIcon = generateShareIcon('email')

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper: {
        justifyContent: 'space-around',
        padding: theme.spacing.unit * 2,
        width: 600
    },
    snsList: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    sns: {
        margin: theme.spacing.unit * 2
    },
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    }
})



class SharingButton extends Component {


    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            copied: false
        }
    }


    handleRequestClose = () => {
        this.setState({ copied: false })
    }

    toggleDrawer = open => () => {
        this.setState({
            drawer: open
        })
    }

    render() {
        const shareUrl = 'http://github.com'
        const title = 'GitHub'
        const { classes } = this.props
        const { drawer, copied } = this.state
        return (
            <div>
                <IconButton aria-label="Share" onClick={this.toggleDrawer(true)}>
                    <ShareIcon />
                </IconButton>
                <Drawer
                    anchor="bottom"
                    open={drawer}
                    onClose={this.toggleDrawer(false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        <div className={classes.container}>
                            <div className={classes.wrapper}>
                                <Typography type='headline' gutterBottom>Sharing</Typography>
                                <div className={classes.snsList}>


                                    <CopyToClipboard text={shareUrl}
                                        onCopy={() => { this.setState({ copied: true }) }}>
                                        <Button fab aria-label="copy-to-clipboard" className={classes.sns}>
                                            <ContentCopy />
                                        </Button>
                                    </CopyToClipboard>
                                    <FacebookShareButton
                                        url={shareUrl}
                                        quote={title}
                                        className={classes.sns}>
                                        <FacebookIcon
                                            size={60}
                                            round />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                        url={shareUrl}
                                        title={title}
                                        className={classes.sns}>
                                        <TwitterIcon
                                            size={56}
                                            round />
                                    </TwitterShareButton>
                                    <GooglePlusShareButton
                                        url={shareUrl}
                                        className={classes.sns}>
                                        <GooglePlusIcon
                                            size={56}
                                            round />
                                    </GooglePlusShareButton>
                                    <EmailShareButton
                                        url={shareUrl}
                                        subject={title}
                                        body="body"
                                        className={classes.sns}>
                                        <EmailIcon
                                            size={56}
                                            round />
                                    </EmailShareButton>
                                </div>
                            </div>

                        </div>
                    </div>
                </Drawer>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={copied}
                    autoHideDuration={6000}
                    onClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Copied to clipboard</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleRequestClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
}



export default withStyles(styles)(SharingButton)