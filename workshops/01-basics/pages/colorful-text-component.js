import { Component } from 'react'

class Text extends Component {
  render() {
    return <p style={{ color: this.props.color }}>Text: {this.props.text}</p>
  }
}

const ColorfulTexts = (props) => (
  <div>
  <Text color="red" text="Red text" />
  <Text color="green" text="Green text" />
  <Text color="orange" text="Orange text" />
  </div>
)

export default ColorfulTexts