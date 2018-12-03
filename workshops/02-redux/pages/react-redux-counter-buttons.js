import { Component } from 'react'
import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

// App for button
const Button = (props) => (
  <div>
    <button onClick={props.onClick}>{props.text}</button>
  </div>
)

// Container for button
const IncreaseButtonContainer = connect(
  state => ({ 
    text: "Click me to increase the number" 
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: INCREMENT })
  })
)(Button)

const DecreaseButtonContainer = connect(
  state => ({
    text: "Click me to decrease the number"
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: DECREMENT })
  })
)(Button)

// App for number
const Text = (props) => <p>{props.text}</p>

// Container for number
const NumberContainer = connect(
  state => ({
    text: 'Redux Counter: ' + state.count
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: DECREMENT })
  })
)(Text)

// Parent component
class ReduxCounter extends Component {
  clickHandler = () => {
    this.props.increase()
  }

  render() {
    return (
      <div>
        <NumberContainer />
        <IncreaseButtonContainer />
        <DecreaseButtonContainer />
      </div>
    )
  }
}

// container for parent
const ReduxCounterContainer = connect(
  state => state
)(ReduxCounter)


// Redux code; 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = { 
  count: 0 
}

const couterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(couterReducer, initialState)

export default props => (
  <Redux store={store}>
    <ReduxCounterContainer />
  </Redux>
)
