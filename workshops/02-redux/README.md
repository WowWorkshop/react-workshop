
class: middle center
# Redux
---
# Homework Review

```js
const TodoMVC = props => (
  <Container>
    <Header>
      <Filters />
    </Header>
    <TodoList>
      <TodoItem>
        <Status />
        <Text />
        <TextEditor />
      </TodoItem>
      {...}
    </TodoList>
    <Footer />
  </Container>
)
```
???
- Dynamic use input
- Shared data cross components
---
class: middle
layout: false
# Redux
- State Management

http://redux.js.org/

---
# How to manage status?

- State
- Props
- Refs
- Event

---
# Why redux

![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg)


---
layout: false
.center[
![](https://image.slidesharecdn.com/reactjs-redux-160705105436/95/workshop-20-reactjs-part-ii-flux-pattern-redux-6-638.jpg?cb=1467716310)
]
---

# Redux Store and Reducer

```js
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
const store = createStore(counterReducer)
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({ type: 'INCREMENT' })

```

http://localhost:3001/redux-counter-timer

Compare with:
http://localhost:3000/counter-timer in 01-basics

---

# Practice
- Use click event to dispatch 'INCREMENT' action

From:
http://localhost:3001/redux-counter-event

Example:
http://localhost:3001/redux-counter-event-final

Compare with:
http://localhost:3000/counter-click in 01-basics
---

# React Redux
- Provider
- connect

```js
import { Provider as Redux, connect } from 'react-redux'

const initialState = { count: 0 }

const store = createStore(counterReducer, initialState)
const App = props => <div>Redux Counter: {props.count}</div>
const ConnectedApp = connect(state => state)(App)

ReactDom.render(
  <Redux store={store}>
    <ConnectedApp />
  </Redux>
, rootDom)

```

http://localhost:3001/react-redux-counter-event

---

# Dispath action anywhere

http://localhost:3001/react-redux-counter-buttons

Compare with http://localhost:3000/number-controller-final in 01-basics

---
# Practice
## Add new action to the counter

- Two new button:
  - Click to double the number
  - Click to reset the number
- Show a new number which is the origin number's power

From:
http://localhost:3001/react-redux-counter-new-events

Example:
http://localhost:3001/react-redux-counter-new-events-final

---
layout: true
# Thunk
---

## A thunk is a function that wraps an expression to delay its evaluation.

```js
let x = 1 + 2;

let foo = () => 1 + 2;
```
---

```js
const incrementAction = { type: 'INCREMENT' }

const incrementActionThunk = () => ({ type: 'INCREMENT' })

const incrementActionAsyncThunk = (dispatch) => {
  setTimeout(() => {
    dispatch(incrementAction)
  }, 1000)
}
```

http://localhost:3001/react-redux-thunk

---
layout: true
# Redux Middleware
---

## Use Redux Thunk in Middleware

```js
({ dispatch, getState }) => next => action => {
  // Do something with action

  return next(action);
};

```

Example:

```js
const logger = ({ dispatch, getState }) => next => action => {
  console.log('action type', action.type);
  next(action)
}

const store = createStore(couterReducer, applyMiddleware(thunk, logger))
```

http://localhost:3001/react-redux-middleware
---
layout: true
# Painful in redux
---

- Lots of template code
- Complex in async programing
```js
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
```
```js
const IncreaseButtonContainerAsyncThunk = connect(
  state => ({
    text: "Click me to increase the number in 2s by thunk"
  }),
  dispatch => ({
    onClick: () => incrementActionAsyncThunk(store.dispatch)
  })
)(Button)
```

---
layout: true
# Rematch
---
https://rematch.gitbooks.io/rematch/#getting-started 
```js
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
    }
  })
}
```
http://localhost:3001/react-redux-counter-new-events-remarch

---
layout: false
class: center middle
# Questions

---
layout: false
# Homework
## Improve your TodoMVC with Redux
- Map and manage your state to Redux
- Save your state in localStorage

---
class: center middle
# Thanks
