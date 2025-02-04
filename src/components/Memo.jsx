import { findPrime } from "../utils/helper";
import { useState, useEffect } from "react";

function Memo() {
  const [number, setNumber] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const nthPrime = useEffect(() => findPrime(number), [number]);

  return (
    <>
      <div
        className="w-72 h-72 border border-red-500"
        style={
          isDarkTheme
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
      >
        <input
          type="text"
          className="border m-2"
          onChange={(e) => setNumber(e.target.value)}
        />

        <h1 className="m-6">{nthPrime}</h1>

        <button
          className="border bg-blue-300 m-6"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default Memo;

// useEffect ---> behaves identical to useMemo but component rendering is increased
// We have to create extra state variable in case of useEffect
// No value can be returned

// useMemo ---> rendering happens immediately
// Can return a value
// used for app optimisation
// skipping expensive calculations
