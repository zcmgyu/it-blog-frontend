import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import ChipsArray from './ChipsArray'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Button from 'material-ui/Button'

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
    };
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
                <Button className={classes.button} raised color="primary">Publish</Button>
                <Button className={classes.button} raised color="default">Save as draft</Button>
            </div>
        )
    }
}

export default withStyles(styles)(PublishModal)