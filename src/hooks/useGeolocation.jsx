import { useEffect, useState } from 'react';

const useGeolocation = () => { // Note the correct spelling: useGeolocation
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`),
        () => setLocation('Access denied')
      );
    } else {
      setLocation('Not supported');
    }
  }, []);

  return location;
};

export default useGeolocation; // Ensure this line is present and matches the function name