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

const DoubleButtonContainer = connect(
  state => ({
    text: "Click me to double the number"
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: DOUBLE })
  })
)(Button)

const ResetButtonContainer = connect(
  state => ({
    text: "Click me to reset the number"
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: RESET })
  })
)(Button)

// App for number
const Text = (props) => <p>{props.text}</p>

// Container for number
const NumberContainer = connect(
  state => ({
    text: 'Redux Counter: ' + state.count
  })
)(Text)

const DoubleNumberContainer = connect(
  state => ({
    text: 'Double number: ' + state.count * 2
  })
)(Text)

// Parent component
const ReduxCounter = (props) => (
  <div>
    <NumberContainer />
    <DoubleNumberContainer />
    <IncreaseButtonContainer />
    <DecreaseButtonContainer />
    <DoubleButtonContainer />
    <ResetButtonContainer />
  </div>
)

// Redux code; 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const DOUBLE = 'DOUBLE'
const RESET = 'RESET'

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
    case DOUBLE:
      return {
        count: state.count * 2
      }
    case RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(couterReducer, initialState)

export default props => (
  <Redux store={store}>
    <ReduxCounter />
  </Redux>
)
