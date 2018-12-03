import { Component } from 'react'
import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const DOUBLE = 'DOUBLE'
const RESET = 'RESET'

const Button = (props) => (
  <div>
    <button onClick={props.onClick}>{props.text}</button>
  </div>
)

// Simple action
const incrementAction = { type: INCREMENT }
const IncreaseButtonContainerSimple = connect(
  state => ({
    text: "Click me to increase the number"
  }),
  dispatch => ({
    onClick: () => store.dispatch(incrementAction)
  })
)(Button)

// Thunk action
const incrementActionThunk = () => (incrementAction)
const IncreaseButtonContainerThunk = connect(
  state => ({
    text: "Click me to increase the number by thunk"
  }),
  dispatch => ({
    onClick: () => store.dispatch(incrementActionThunk())
  })
)(Button)

// Thunk action with parameter
const incrementActionThunkWithParameter = (number) => ({ 
  type: INCREMENT,
  number: number
})
const IncreaseButtonContainerThunkWithParameter = connect(
  state => ({
    text: "Click me to increase the number by thunk"
  }),
  dispatch => ({
    onClick: () => store.dispatch(incrementActionThunkWithParameter(10))
  })
)(Button)

// Async thunk action
const incrementActionAsyncThunk = (dispatch) => {
  setTimeout(() => {
    dispatch(incrementAction)
  }, 1000)
}
const IncreaseButtonContainerAsyncThunk = connect(
  state => ({
    text: "Click me to increase the number in 2s by thunk"
  }),
  dispatch => ({
    onClick: () => incrementActionAsyncThunk(store.dispatch)
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
        <IncreaseButtonContainerSimple />
        <IncreaseButtonContainerThunk />
        <IncreaseButtonContainerThunkWithParameter />
        <IncreaseButtonContainerAsyncThunk />
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
      const number = action.number || 1
      return {
        count: state.count + number
      }
    default:
      return state
  }
}

const store = createStore(couterReducer)

export default props => (
  <Redux store={store}>
    <ReduxCounterContainer />
  </Redux>
)
