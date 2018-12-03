import { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider as Redux, connect } from 'react-redux'
import thunk from 'redux-thunk'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const DOUBLE = 'DOUBLE'
const RESET = 'RESET'

const Button = (props) => (
  <div>
    <button onClick={props.onClick}>{props.text}</button>
  </div>
)

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


class ReduxCounter extends Component {
  clickHandler = () => {
    this.props.increase()
  }

  render() {
    return (
      <div>
        <p>Redux Counter: {this.props.count}</p>
        <IncreaseButtonContainer />
        <DecreaseButtonContainer />
        <DoubleButtonContainer />
        <ResetButtonContainer />
      </div>
    )
  }
}

const ReduxCounterContainer = connect(
  state => state
)(ReduxCounter)


// Initialize code; 

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

const logger = ({ dispatch, getState }) => next => action => {
  console.log('action type', action.type);
  next(action)
}

const store = createStore(couterReducer, applyMiddleware(thunk, logger))

export default props => (
  <Redux store={store}>
    <ReduxCounterContainer />
  </Redux>
)
