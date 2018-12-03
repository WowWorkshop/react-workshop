import { Component } from 'react'
import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

// App
const ReduxCounter = (props) => (
  <div>
    <button onClick={props.onclick} >Redux Counter: {props.count}</button>
  </div>
)

// Container
const ReduxCounterContainer = connect(
  state => ({
    count: state.count
  }),
  dispatch => ({
    onclick: () => store.dispatch({ type: INCREMENT })
  })
)(ReduxCounter)

// Redux code
const INCREMENT = 'INCREMENT'

const initialState = { count: 0 }

const couterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
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
