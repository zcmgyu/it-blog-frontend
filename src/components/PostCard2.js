// @flow weak

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia, CardHeader, CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import FavoriteIcon from 'material-ui-icons/Favorite'
import ShareIcon from 'material-ui-icons/Share'

const styles = theme => ({
    card: {
        maxWidth: 500,
        height: 300,
        display: 'flex',
        margin: theme.spacing.unit * 1
    },

    columnLeft: {
        flexGrow: 1,
        display: 'flex'
    },
    cover: {
        flexGrow: 1
    },
    shortPost: {
        height: '10px',
        flexGrow: 1,
        maxHeight: '164px',
        paddingTop: '0px'
    },
    title: {
        paddingTop: '0px'
    },
    content: {
        paddingTop: theme.spacing.unit * 2
    },

    columnRight: {
        flexBasis: '60%',
        display: 'flex',
        flexDirection: 'column'
    },
    flexGrow: {
        flex: '1 1 auto',
    }
})

const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim purus vitae ipsum interdum, quis tristique eros imperdiet."
const content = "Suspendisse aliquam egestas risus, et volutpat eros laoreet in. Nullam ultrices euismod ornare. Integer in nibh a velit aliquam venenatis id sit amet nunc. Donec id rhoncus augue. Aliquam venenatis purus a arcu varius vehicula. Sed et turpis elementum, commodo sem eget, consectetur ante. Suspendisse potenti. Suspendisse lacinia lectus risus, at dictum lorem bibendum ac. Sed fringilla lacinia odio nec rutrum. Morbi nisl lorem, rhoncus nec ligula a, malesuada ultrices mi. Integer finibus quam at purus finibus auctor. Praesent molestie nunc ut dolor ultrices interdum. Fusce ut placerat augue. Nunc scelerisque ut dolor non vulputate. Vivamus dolor mi, egestas eu felis nec, consequat vestibulum sem. Quisque iaculis vestibulum feugiat."



class PostCard2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSharing: false
        }
    }


    shareToSNS() {
        this.setState({ isSharing: true })
    }

    render() {
        const { classes, theme } = this.props
        const { isSharing } = this.state
        return (
            <div>
                <Card className={classes.card}>
                    <div className={classes.columnLeft}>
                        <CardMedia
                            className={classes.cover}
                            image="https://material-ui-next.com/static/images/cards/paella.jpg"
                            title="Live from space album cover"
                        />
                    </div>
                    <div className={classes.columnRight}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>LN</Avatar>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"

                        />
                        <CardContent className={classes.shortPost}>
                            <Typography type="title" className={classes.title}>
                                {title.length > 80 ? title.trim().substr(0, 80) + '...' : title.trim()}
                            </Typography>
                            <Typography component="p" className={classes.content}>
                                {content.length > 156 ? content.trim().substr(0, 156) + '...' : content.trim()}
                            </Typography>
                        </CardContent>
                        <CardActions disableActionSpacing>
                            <div className={classes.flexGrow} />
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share" onClick={this.shareToSNS.bind(this)}>
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </div>

                </Card>
            </div>
        )
    }
}

PostCard2.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(PostCard2)