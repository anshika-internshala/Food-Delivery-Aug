import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <>
      <h1>Error Component</h1>
      <h2>{err.data}</h2>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
    </>
  );
}

export default Error;
