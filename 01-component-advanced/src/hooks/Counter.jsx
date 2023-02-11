import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //   const array = useState(0); // returns an array with 2 elements
  //   const count = array[0]; // = this.state.count
  //   const setState = array[1]; // = this.setState()

  const title = `${name} has clicked ${count} times.`;
  useDocumentTitle(title);
  //   useEffect(() => {
  //     document.title = `${name} has clicked ${count} times.`;

  //     return () => {
  //       console.log("Clean up");
  //     };
  //   }, [count, name]);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times.
      </div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Counter;
