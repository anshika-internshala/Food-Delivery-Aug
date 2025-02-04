import { useState, useRef } from "react";

function Ref() {
  let x = 0; // local variable

  const [y, setY] = useState(0); // state Variable

  const z = useRef(0); // Reference variable

  console.log(z);

  function handleX() {
    x = x + 1;
    console.log(x);
  }

  function handleY() {
    setY(y + 1);
  }

  function handleZ() {
    z.current = z.current + 1;

    console.log(z.current);
  }

  return (
    <div className="w-72 h-72 border border-red-500 m-2">
      <h1>X: {x}</h1>

      <button className="border m-6 border-black" onClick={handleX}>
        Increase X
      </button>

      <h1>Y: {y} </h1>

      <button className="border m-6 border-black" onClick={handleY}>
        Increase Y
      </button>

      <h1>Z: {z.current} </h1>

      <button className="border m-6 border-black" onClick={handleZ}>
        Increase Z
      </button>
    </div>
  );
}

export default Ref;

// Reference Variables --- created using useRef Hooks
// Remembers the previously updated value
// Updates UI once component is rerendered
