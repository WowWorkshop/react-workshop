import { Component } from 'react'

class NumberController extends Component {
  render() {
    return (
      <div>
        <p>Number: 0</p>
        <button>Click to increase by 1</button>
        <button>Click to decrease by 1</button>
        <button>Click to double the number</button>
        <button>Click to reset the number</button>
      </div>
    )
  }
}

export default NumberController