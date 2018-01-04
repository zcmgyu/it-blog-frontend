import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'

class ControlledChipInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chips: []
    }
  }

  onBeforeAdd(chip) {
    return chip.length >= 1
  }

  handleAdd(chip) {
    const { chips } = this.state
    if (chips.length < 5) {
      this.setState({
        chips: [...chips, chip]
      })
    }
      
  }

  handleDelete(deletedChip) {
    // if (deletedChip !== 'js') {
    //   this.setState({
    //     chips: this.state.chips.filter((c) => c !== deletedChip)
    //   })
    // } else {
    //   alert('Why would you delete JS?')
    // }
  }

  render() {
    return (
      <ChipInput
        {...this.props}
        value={this.state.chips}
        onBeforeAdd={(chip) => this.onBeforeAdd(chip)}
        onAdd={(chip) => this.handleAdd(chip)}
        onDelete={(deletedChip) => this.handleDelete(deletedChip)}
        onBlur={(event) => {
          if (this.props.addOnBlur && event.target.value) {
            this.handleAdd(event.target.value)
          }
        }}
        fullWidth
        helperText='This is a single chip input inside a form.'
      />
    )
  }
}

ControlledChipInput.propTypes = {
  addOnBlur: PropTypes.bool
}

export default ControlledChipInput