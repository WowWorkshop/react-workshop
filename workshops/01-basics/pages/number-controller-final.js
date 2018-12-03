import { Component } from 'react'

const Controller = (props) => (
  <div>
    <button onClick={props.clickHandler}>{props.text}</button>
  </div>
)

class NumberController extends Component {
  state = {
    count: 0
  }

  increace = () => {
    this.setNewCount(this.state.count + 1)
  }

  decrease = () => {
    this.setNewCount(this.state.count - 1)

  }

  double = () => {
    this.setNewCount(this.state.count * 2)
  }

  reset = () => {
    this.setNewCount(0)
  }

  setNewCount(newCount) {
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <p>Number: {this.state.count}</p>
        <Controller clickHandler={this.increace} text="Click to increase by 1" />
        <Controller clickHandler={this.decrease} text="Click to decrease by 1" />
        <Controller clickHandler={this.double} text="Click to double the number" />
        <Controller clickHandler={this.reset} text="Click to reset the number" />
      </div>
    )
  }
}

export default NumberController