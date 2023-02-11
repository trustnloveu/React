import React, { Fragment, useState } from "react";

function CounterFunction(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Fragment>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </Fragment>
    </div>
  );
}

export default CounterFunction;
