import { useState, useEffect } from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const online = window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    const offline = window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    // Cleaning the memory
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  });

  return onlineStatus;
}

export default useOnlineStatus;

// Mount => Component is rendered on UI
// Unmount => Component is removed from UI

// Mounted ===> useEffect is executed
// unmounted ===> return function of useEffect gets executed
