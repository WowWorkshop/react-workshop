# React Engineering

---
layout: false
class: center middle
# Let's start our own
# React App now !

---
# Demo Project

## Implement a TodoMVC
- Pure React
  - State
  - Props
  - Refs
  - Event
- No style required
- No DOM operation

Reference: http://todomvc.com/

---
layout: true
# create-react-app
---

https://github.com/facebookincubator/create-react-app

```js
yarn create-react my-todo

cd my-todo

yarn install

yarn start
```
---

```plain
my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

---
layout: false

# Remove... 

---

# Demo Project
.left[
## Improve your TodoMVC with Redux
- Map and manage your state to Redux
- Save your state in localStorage
- Use Saga to operate the localStorage
]

---

# Demo Project
#### Try to add some tests to your TodoMVC 
- Add unit test to your TodoMVC sub components
- Plus, add DOM render unit test, if needed

*Think more with TDD...*

---
class: middle center

# More Tips...

---
layout: true
# Isomorphic

---

## Reusability
- Reuse Components
- Reuse JS logic

## Some more packages

- react-redux
- react-router
- UI framework (e.g: material-ui)

---
## SSR Server-side-render

- React Dom server render
- React Router reuse

## No more pain points of SPA
- First Time Loading
- SEO

---
layout: false

# StoryBook


---
# Recap

---
class: center middle
# Thanks !
