import React, { Component, Fragment } from 'react'
import Container from './Container'
import Input from './Input'
import Check from './Check'
import Label from './Label'

class Checkbox extends Component {
  state = {
    checked: false,
  }

  handleOnChange = this.handleOnChange.bind(this)

  handleOnChange() {
    const { input: { onChange } } = this.props

    this.setState(prevState => ({
      checked: !prevState.checked
    }), () => {
      onChange(this.state.checked)
    })
  }

  render() {
    const { checked } = this.state
    const {
      id,
      input,
      label,
      ...rest,
    } = this.props

    return (
      <Fragment>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Container onClick={this.handleOnChange}>
          <Input
            type="checkbox"
            id={id}
            checked={checked}
            {...input}
            {...rest} />
          {checked && <Check />}
        </Container>
      </Fragment>
    )
  }
}

export default Checkbox
