import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Button from 'material-ui/Button'
import compose from 'recompose/compose';
import { post } from '../actions/post'
import ControlledChipInput from './ControlledChipInput'

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 2,
        width: '300px',
        maxHeight: '305px',
        overflow: true
    },
    chip: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: '0px'
    },
    button: {
        margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
    }

})

class PublishModal extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         category: '',
    //         tags: []
    //     }
    // }
    state = {
        category: ''
    }

    handleChange = key => event => {
        this.setState({ [key]: event.target.value });
        console.log(`key: ${key}: ${event.target.value}`)
    };

    createPost = publicPost => () => {
        const { category } = this.state
        console.log('Category -> ' + category)
        const {content} = this.props.post
        const title = content.blocks[0].text
        const tags = ['test1', 'test2']
        this.props.dispatch(post.request({ category, tags, publicPost, title, content }))
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.container}>
                <Typography type="subheading" gutterBottom>Ready to publish?</Typography>
                <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="category">Caterogy</InputLabel>
                    <Select
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                        input={<Input name="category" id="category" />}
                    >
                        <MenuItem value={'Development'}>Development</MenuItem>
                        <MenuItem value={'Design'}>Design</MenuItem>
                        <MenuItem value={'QA'}>QA</MenuItem>
                        <MenuItem value={'Management'}>Management</MenuItem>
                    </Select>
                </FormControl>
                <Typography type='body1'>Add or change tags (up to 5) so readers know what your post is about:</Typography>
                <ControlledChipInput className={classes.chip}/>
                <Button className={classes.button} raised color="primary" onClick={this.createPost(true)}>Publish</Button>
                <Button className={classes.button} raised color="default" onClick={this.createPost(false)}>Save as draft</Button>
            </div>
        )
    }
}


// <TextField
// id="tags"
// label="Tags"
// className={classes.textField}
// value={this.state.tag}
// onChange={this.handleChange('tag')}
// fullWidth
// />
// <ChipsArray />

const mapStateToProps = (state) => {
    return {
        accessToken: state.auth.accessToken,
        post: state.post
    }
}

export default compose(
    withStyles(styles, {
        name: 'PublishModal',
    }),
    connect(mapStateToProps),
)(PublishModal)