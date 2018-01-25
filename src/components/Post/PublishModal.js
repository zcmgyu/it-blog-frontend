import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Button from 'material-ui/Button'
import compose from 'recompose/compose'
import { createPost, updatePost } from '../../actions/post'
import ControlledChipInput from '../ControlledChipInput'
import { getCategory } from '../../actions/category'

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
    constructor(props) {
        super(props)
        this.state = {
            categoryId: this.props.currentPost.categoryId || ''
        }
    }

    componentWillMount() {
        const { categories, dispatch } = this.props
        if (categories.length === 0) {
            dispatch(getCategory.request())
        }
    }

    handleChange = key => event => {
        this.setState({ [key]: event.target.value })
    }

    createPost = publicPost => () => {
        const { categoryId } = this.state
        let { currentPost, dispatch, name } = this.props
        const { content, rawContent } = currentPost
        const tags = this.chips.state.chips


        currentPost = { ...currentPost, categoryId, tags }
        console.log(currentPost)
        if (name === 'Update') {
            dispatch(updatePost.request(currentPost))
        } else {
            dispatch(createPost.request({ categoryId, tags, publicPost, content, rawContent }))
        }
    }

    renderCategoryList = () => (
        this.props.categories.map(category => (
            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
        )
        )
    )

    render() {
        const { classes, currentPost } = this.props

        return (
            <div className={classes.container}>
                <Typography type="subheading" gutterBottom>Ready to publish?</Typography>
                <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="category">Caterogy</InputLabel>
                    <Select
                        value={this.state.categoryId}
                        onChange={this.handleChange('categoryId')}
                        input={<Input name="categoryId" id="categoryId" />}
                    >
                        {
                            this.renderCategoryList()
                        }
                    </Select>
                </FormControl>
                <Typography type='body1'>Add or change tags (up to 5) so readers know what your post is about:</Typography>
                <ControlledChipInput chips={currentPost.tags} ref={chipInput => { this.chips = chipInput }} className={classes.chip} />
                <Button className={classes.button} raised color="primary" onClick={this.createPost(true)}>Publish</Button>
            </div>
        )
    }
}

// <MenuItem value={'Development'}>Development</MenuItem>
//     <MenuItem value={'Design'}>Design</MenuItem>
//     <MenuItem value={'QA'}>QA</MenuItem>
//     <MenuItem value={'Management'}>Management</MenuItem>

// <Button className={classes.button} raised color="default" onClick={this.createPost(false)}>Save as draft</Button>

const mapStateToProps = (state) => {
    return {
        // content: state.post.content,
        currentPost: state.post.current_post,
        isEdit: state.post.is_edit,
        categories: state.category.categories
    }
}

export default compose(
    withStyles(styles, {
        name: 'PublishModal',
    }),
    connect(mapStateToProps),
)(PublishModal)