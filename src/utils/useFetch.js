import { useEffect, useState } from "react";

function useFetch(url) {
  let data = [];

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((response) => data.push(response));
  });

  return data[0];
}

export default useFetch;
