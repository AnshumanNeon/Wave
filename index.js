import Wave from "./src/Wave";

function App({name}) {
    const [count, setCount] = Wave.useState(1)

    return (
        <div className="App">
            <h1>Counter Example {name}</h1>
            <button onClick={() => setCount(count => count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count => count + 1)}>+</button>
        </div>
    )
}

const element = <App name="foo" />
const container = document.getElementById("root");
Wave.Draw(element, container);