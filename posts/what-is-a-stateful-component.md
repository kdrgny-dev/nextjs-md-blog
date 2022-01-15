---
title : 'What is a stateful component in React?'
date : '18 Ekim 2021'
excerpt : 'A stateful component is a component whose behavior depends on its state. This means...'
image : 'images/posts/2.jpeg'
---

# What is a stateful component in React?
#### Answer

A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.

```js
// Stateful class component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    // ...
  }
}

// Stateful function component
function App() {
  const [count, setCount] = useState(0)
  return // ...
}
```

#### Good to hear

-   Stateful components have internal state that they depend on.
-   Stateful components are class components or function components that use stateful Hooks.
-   Stateful components have their state initialized in the constructor or with useState().