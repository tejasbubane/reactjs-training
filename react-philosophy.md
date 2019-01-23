# ReactJS

### Introduction

* Created and open-sourced by Facebook - 2013 (~5yrs ago)

* Library not a framework
  - no conventions

* Started out as a V in the MVC - but now is a full-fledged SPA tool
  - can be used in conjunction with other frameworks like backbone/angularjs

* Components instead of templates
  - Small cohesive parts of UI that can be composed together


### Design

* Render view and respond to user events

* All JSX calls translate to plain JS function calls

eg.

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

translates to

```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

* Virtual DOM
  - This is what makes react blazing fast
  - Maintained by react internally
  - DOM updates are expensive
    (eg, change text on screen, add event listener DOM node, etc.)
  - Virtual DOM is representation of actual DOM tree into plain JS objects
  - Change the virtual DOM as per state changes, diff with previous version of VDOM,
    apply updates to actual DOM

* State and props
  - State is mutable - and directly corresponds to UI change
  - Props are immutable

* Lifecycle events
  - Hooks


### Philosophy

_(what makes react great)_

* Plain old Javascript - nothing new
  - Does not reinvent the wheel like handlebars, moustache and others

* Templates separate technologies, components separate logic
  - Rethinking best practices

* Functional Approach
  - your **state** corresponds to what is being displayed on screen
  - Declarative vs Imperative
  - Very very useful in debugging - look at your state
    and deterministically tell what your UI will look like.
