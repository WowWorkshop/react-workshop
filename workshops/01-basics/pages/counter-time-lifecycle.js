import { Component } from 'react'

class Counter extends Component {
  countInterval = null

  state = {
    count: 0
  }

  increase = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  componentDidMount() {
    this.countInterval = setInterval(this.increase, 1000);
  }
 
  componentWillUnmount() {
    if (this.countInterval) {
      clearInterval(countInterval);
    }
  }

  render() {
    return <div>Count: {this.state.count}</div>
  }
}

export default Counter