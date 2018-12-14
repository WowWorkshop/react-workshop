# Basics of React

---
# Before React

- ES6
- JSX
- Vs. AngularJS

---

# ES6
## Const and let
```js
const pi = 3.1415;
pi = 2; // throw exception

let x = 1;
var y = 1;
if (true) {
  let x = 2;
  var y = 2;
  console.log('x in if:' + x); // x in if:2
  console.log('y in if:' + y); // y in if:2
}

console.log('x out if:' + x); // x out if:1
console.log('y out if:' + y); // y out if:2

```

---
# ES6
## class
```js
class Person {
  say() {
    console.log('I am a Person.');
  }
}
class Man extends Person {
  say() {
    console.log('I am a Man.');
  }
}
class MyComponent extends React.Component {
  constructor(props) {

  }
}
```
---
# ES6
## Arrow Function
```js
const double = x => x * 2
const double = function(x) {
  return x * 2;
}

const add = (a, b) => a + b
const add = function(a, b) {
  return a + b;
}

const increase = x => {
  x++;
  return x;
}
const increase = function(x) {
  x++;
  return x;
}

```

---
layout: false

# JSX
## Javascript Syntax for XML
```jsx
<div>Hello world</div>

<div className="my-class" id={getId()} style={{color: 'red'， fontSize: 20}}>
  {getMessage()}
</div>

class MyComponent extends React.Component {
  getHeader() {
    return <div>Header</div>
  }
  render() {
    return <div>Hello {this.getHeader()}</div>
  }
}
```

- Variables/Function in HTML
- Operate HTML as variable/component
- Use {} for JS code
- Keyword class -> className
- Use object for style

---
layout: true

#Vs. DOM

---
## DOM with Javascript

- DOM based operation
- Context first
- DOM as single source of truth

```html
<script type="text/javascript">
  function onChange(event) {
    console.log(event);
    console.log(this.value);
  }
</script>

<input type="text" name="input" value="" onChange="onChange">
```

---

## DOM with jQuery

- jQuery object based operation
- jQuery as namespace
- DOM as single source of truth

```html
<input type="text" id="input" value="">

<script type="text/javascript">
  $('#id').on('change', function (event) {
    console.log(event);
    console.log($(this).val());
  })
</script>
```
---
layout: false

# JSX Recap

- Component based operation
- Modules/Packages
- Props data as single source of truth

```js
(props) => (
  <input type="text" name="input" value="input" onChange={event => {
    console.log(event)
    console.log(event.target.value)
  }}>
)

const Icon = props => (
  <i className={`icon icon-${props.name}`}>{props.children}</i>
)
```
---

# Read more

- https://reactjs.org/docs/introducing-jsx.html
- https://reactjs.org/docs/jsx-in-depth.html

---
# Vs. AngularJS
## What is React ?
...

## The differences between React and AngularJS

...

---
class: middle center

# Why React ?

---

# React ...


---

# Prepare code
## Clone the sample code from github and start the server

- `git clone git@github.com:wow-workshop/react-workshop.git`
- `cd workshops/01-basics`
- `yarn install`
- `yarn start`
- Open http://localhost:3000/ in browser to see the list of examples

## Or copy code with node_modules

- Copy code from xxxx
- unzip it
- `cd workshops/01-basics`
- `yarn start`
- Open http://localhost:3000/ in browser to see the list of examples

---
# Hello World
## Component
```js
class HellWorld extends Component {
  render() {
      return (<div>Hello World!</div>);
  }
}
```
http://localhost:3000/hello-world-component

## Pure function
```js
const HellWorld = (props) => <div>Hello World!</div>;
```
http://localhost:3000/hello-world-purefunction

---
# When to use Component
- State
- Lifecycle

```js
class MyComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      target: 'loading'
    }
  }
  componentDidMount() {
    this.setState({
      target: 'loaded'
    })
  }
  render() {
    return <div>State: {this.state.target}</div>
  }
}
```

---

# Pure Function is preferred

- Static styled components
- Self managed components
- Event Driven components

```js
const MyComponent = props => <div className="header-titile">Hello</div>

const Toggle = props => (
  <span
    onClick={props.onClick && (evt) => props.onClick(evt)}
  >
    {props.children}
  </span>
)
Toggle.displayName = 'Radio'
Toggle.propTypes = { ... }

```

---
# Props
The properties for the component:
```js
const Text = (props) => <p style={{ color: props.color }}>Text: {props.text}</p>;



const ColorfulTexts = (props) => (
  <div>
      <Text color="red" text="Red text" />
      <Text color="green" text="Green text" />
      <Text color="orange" text="Orange text" />
  </div>
)
```

Example: http://localhost:3000/colorful-text

- Readonly
- To be passed from parent

---
# Practice for Props
Try to create `User` component from this template:

```js
const User = (props) => <p>...</p>;

const UserList = (props) => (
  <div>
    <User /> // SQ, 23
    <User /> // Chloe, 21
    <User /> // Anu, 22
  </div>
)

export default UserList
```
Make sure the output are 3 users like this:
```html
I am SQ, I am 23 year old
I am Chloe, I am 21 year old
I am Anu, I am 22 year old
```
Start:
http://localhost:3000/user

Example:
http://localhost:3000/user-final 
---

# Props in Component

Use `this.props` to refer the props:
```js
class Text extends Component {
  render() {
    return <p style={{ color: this.props.color }}>Text: {this.props.text}</p>
  }
}
```
Example: http://localhost:3000/colorful-text-component

The same with the pure function one: http://localhost:3000/colorful-text

---

# State

```js
class Counter extends Component {
  state = {
    count: 0
  }

  constructor(props) {
    super(props)

    setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000);
  }

  render() {
    return <div>Count: {this.state.count}</div>
  }
}
```

Example: http://localhost:3000/counter-timer

- Initial state at beginning
- Use `this.setState()` to change state

---
# Event

```js
class Counter extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.handleClick}>Count: {this.state.count}</button>
  }
}
```

Example: http://localhost:3000/counter-click

- Use **Arrow Function** to define event handler function
- Refer this page for all events: https://reactjs.org/docs/events.html 

---
# An example to combine these features
## props, state, event

Example: http://localhost:3000/counter-buttons

---
# Practice for Props, State and Event
## Number controllers
- Show a number (default is 0)
- Four buttons to control the number
  - Click to increase by 1
  - Click to decrease by 1
  - Click to double the number
  - Click to reset to 0

Start: 
http://localhost:3000/number-controller

Example:
http://localhost:3000/number-controller-final

---
# One more practice
**Create a `Dropdown` Component:**
 - Show a clickable button
 - When click, show a dropdown
 - Toggle the dropdown list when click again

```js
import DropDown from './DropDown'

const dropdownList = (
  <ul>
    <li>BA</li>
    <li>DEV</li>
    <li>PO</li>
    <li>QA</li>
    <li>UX</li>
  </ul>
)
const MyDropDown = <DropDown dropdown={dropdownList}>Click Me</DropDown>

```

---
# Refs

```js
class Input extends Component {
  changeHanlder(event) {
    let input = this.refs.myInput

    this.setState({
      text: input.value
    })
  }

  render() {
    return (
      <div>
        <input ref="myInput" type="text" onChange={this.changeHanlder} />
        <p>Input: {this.state.text}</p>
      </div>
    )
  }
}
```

- Add attribute "ref" in element
- Use this.refs.[name] to refer the element
- Try to avoid use "refs" in code

Example: http://localhost:3000/input-refer

---
# Array in elements

- Array of JSX element can be used in JSX
- Add "key" attribute for array element

Example: http://localhost:3000/user-final-array  
Example: http://localhost:3000/counter-buttons-array

---
# Lifecycle

.center[
![](https://cdn-images-1.medium.com/max/2000/1*cEWErpe-oY-_S1dOaT1NtA.jpeg)
]

---
# Lifecycle

##Example
Make sure the increase method will only be ran when the component is mounted
http://localhost:3000/counter-time-lifecycle

## Reference
- https://reactjs.org/docs/react-component.html

---
# Thinking in React

- https://reactjs.org/docs/thinking-in-react.html

---
layout: false
class: center middle
# Thanks !