import { Component } from 'react'

class Input extends Component {
  state = {
    text: ''
  }

  changeHanlder = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input ref="myInput" type="text" onChange={this.changeHanlder} />
        <p>Input: {this.state.text}</p>
      </div>
    )
  }
}

export default Input