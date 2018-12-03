import { Component } from 'react'
import { createStore } from 'redux'
const INCREMENT = 'INCREMENT'

const couterReducer = (state = { count : 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const store = createStore(couterReducer, {
  count: 0
})

export default class ReduxCounter extends Component {
  state = {
    count: 0
  }
  
  shouldComponentUpdate(nextState, nextProps) {
    return nextState.count !== this.state.count
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ 
        count: state.count
      })
    })
  }

  clickHandler = () => {
    store.dispatch({ type: INCREMENT })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} >Redux Counter: {this.state.count}</button>
      </div>
    )
  }
}
