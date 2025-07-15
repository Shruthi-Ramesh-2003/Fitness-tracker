import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
  const [network, setNetwork] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => setNetwork(navigator.onLine);
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);

  return network;
};

export default useNetworkStatus; // Ensure this line exists