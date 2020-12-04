import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import CounterClass from "./hooks/CounterClass";
import CounterFunction from "./hooks/CounterFunction";

function App() {
  return (
    <>
      <Counter />
      <br />
      <Movie id={1} />
      <br />
      <CounterClass />
      <br />
      <CounterFunction />
    </>
  );
}

export default App;
