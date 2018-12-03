import { Component } from 'react'
import { createStore } from 'redux'
import { init } from '@rematch/core'
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
  model => ({
    onClick: () => model.count.increment(),
  })
)(Button)

const IncreaseAsyncButtonContainer = connect(
  state => ({
    text: "Click me to decrease the number"
  }),
  model => ({
    onClick: () => model.count.incrementAsync(),
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

// Parent component
// Parent component
const ReduxCounter = (props) => (
  <div>
    <NumberContainer />
    <IncreaseButtonContainer />
    <IncreaseAsyncButtonContainer />
  </div>
)

// Rematch - model.js:
export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state) {
      return state + 1
    }
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
      dispatch.count.increment(payload)
      await new Promise(resolve => setTimeout(resolve, 500))
      dispatch.count.increment(payload)
    }
  })
}

// Rematch - initiliaze:
const models = {
  count
}

const store = init({
  models
})

export default props => (
  <Redux store={store}>
    <ReduxCounter />
  </Redux>
)
