import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Chip from 'material-ui/Chip'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class ChipsArray extends React.Component {
    state = {
      chipData: [
        { key: 0, label: 'Angular' },
        { key: 1, label: 'JQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'ReactJS' },
        { key: 4, label: 'Vue.js' },
        { key: 5, label: 'Node.js' },
      ],
    }
  
    styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }
  
    handleRequestDelete = data => () => {
      const chipData = [...this.state.chipData]
      const chipToDelete = chipData.indexOf(data)
      chipData.splice(chipToDelete, 1)
      this.setState({ chipData })
    }
  
    render() {
      const { classes } = this.props
  
      return (
        <div className={classes.row}>
          {this.state.chipData.map(data => {
            return (
              <Chip
                label={data.label}
                key={data.key}
                onRequestDelete={this.handleRequestDelete(data)}
                className={classes.chip}
              />
            )
          })}
        </div>
      )
    }
  }
  
  ChipsArray.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  export default withStyles(styles)(ChipsArray)