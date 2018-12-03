import { Component } from 'react'

const Counter = (props) => (
  <div>
    <button onClick={props.clickHandler}>{props.text}</button>
  </div>
)

class CounterList extends Component {
  state = {
    count: 0,
    counters: [
      {
        clickHandler: this.increace,
        text: "First counter"
      },
      {
        clickHandler: this.increace,
        text: "Second counter"
      },
      {
        clickHandler: this.increace,
        text: "Click me"
      },
    ]
  }

  increace = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  getCounterElements() {
    return this.state.counters.map((counter) => <Counter key={counter.text} clickHandler={counter.clickHandler} text={counter.text} />)
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {this.getCounterElements()}
      </div>
    )
  }
}

export default CounterList