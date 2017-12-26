import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import ChipsArray from './ChipsArray'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Button from 'material-ui/Button'
import compose from 'recompose/compose';
import { postRequest } from '../actions/post'

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 2,
        width: '300px',
        maxHeight: '305px',
        overflow: true
    },
    chip: {
        margin: theme.spacing.unit,
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

    createPost = isPublic => () => {
        const { category } = this.state
        console.log('Category -> ' + category)
        const { accessToken, postState } = this.props
        const tags = ['test1', 'test2']
        const publicPost = isPublic
        this.props.dispatch(postRequest({ category, tags, publicPost, accessToken, ...postState }))
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
                <TextField
                    id="tags"
                    label="Tags"
                    className={classes.textField}
                    value={this.state.tag}
                    onChange={this.handleChange('tag')}
                    fullWidth
                />
                <ChipsArray />
                <Button className={classes.button} raised color="primary" onClick={this.createPost(true)}>Publish</Button>
                <Button className={classes.button} raised color="default" onClick={this.createPost(false)}>Save as draft</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authReducer.accessToken,
        postState: state.post
    }
}

export default compose(
    withStyles(styles, {
        name: 'PublishModal',
    }),
    connect(mapStateToProps),
)(PublishModal)