import { useEffect, useState } from "react";

const useNetwork = () => {
  const [state, setState] = useState<any>({
    since: undefined,
    online: navigator.onLine,
  });

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });

  const handleOnline = () => {
    setState((prevState: any) => ({
      ...prevState,
      since: Date.now().toString(),
      online: true,
    }));
  };

  const handleOffline = () => {
    setState((prevState: any) => ({
      ...prevState,
      since: Date.now().toString(),
      online: false,
    }));
  };

  return state;
};

export default useNetwork;
