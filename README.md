# Wave

Wave is a JavaScript library for building user interfaces.

* **Declarative:** Wave allows for easy creation of interactive interface.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Reusable Code:** Like React, Wave also has reusable Components, allowing for more readable and performant code.
* **Fast & Efficient:** Unlike other frameworks or libraries, Wave doesn't has big chunk of code or hueg files sizes. And also because this library makes use of virtual DOM it make it even more efficient.
* **Small Size:** The library is very small in size unlike other libraries and frameworks. This makes for even better performance.
* **Multiple-Class Inheritance:** Wave presents Multiple-Class Inheritance to you. You can now inherit from multiple classes and write more complex-yet understandable code. This will also help people coming from OOP background like Java or C#.

## Installation

Wave can be installed from:

## Documentation

## Examples

Here is an example to get you started:

```jsx
function App({name}) {
    return <h1>Hello My Friend {name}</h1>
}

const element = <App name="foo" />
const container = document.getElementById("root");
Wave.Draw(element, container);
```

This will show "Hello My Friend foo" on the page.

You'll notice that we used an HTML-like syntax called JSX. Which is quite similar to that of Reactjs. Waves' original inspiration was React and hence we have JSX, but that doesn't means that Wavejs is a "React clone". Just like React, JSX is not required, but it makes code more readable.

## Future

* Soon Class-based components will be added.
* 