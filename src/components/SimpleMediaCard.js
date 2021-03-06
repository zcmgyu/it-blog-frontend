// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
    card: {
        maxWidth: 345,
        maxHeight: 345
    },
    media: {
        height: 200,
    },
    title: {
        lineHeight: '24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }
}

function SimpleMediaCard(props) {
    const { classes } = props
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="https://material-ui-next.com/static/images/cards/paella.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Lizards are a widespread group of squamate reptiles
          </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica.
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica.
          </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary">
                        Share
          </Button>
                    <Button dense color="primary">
                        Learn More
          </Button>
                </CardActions>
            </Card>
        </div>
    )
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleMediaCard)