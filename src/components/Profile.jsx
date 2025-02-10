import { useEffect, useState } from "react";

function Profile(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function handleUpdateCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    // use effect gets executed after component mounts

    return () => {
      console.log("Functional component is unmounted");
    };
  }, [count]);

  return (
    <>
      <h1>Profile Component</h1>
      <h2>{props.name}</h2>
      <h2>{count}</h2>
      <h2>{count1}</h2>
      <button className="border bg-slate-50" onClick={handleUpdateCount}>
        Update Count
      </button>
    </>
  );
}

export default Profile;
