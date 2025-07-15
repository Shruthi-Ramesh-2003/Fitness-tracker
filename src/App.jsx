import { useState } from 'react';
import ProgressBar from './components/ProgressBar.jsx';
import WorkoutStatus from './components/WorkoutStatus.jsx';
import useGeolocation from './hooks/useGeolocation.jsx';
import useNetworkStatus from './hooks/useNetworkStatus.jsx';

function App() {
  const location = useGeolocation();
  const networkStatus = useNetworkStatus();
  const [progress, setProgress] = useState(60);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          💪 Fitness Check
        </h1>
        
        <WorkoutStatus location={location} network={networkStatus} />

        <ProgressBar progress={progress} />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
            onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
            disabled={progress >= 100}
          >
            ➕ Increase
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
            onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}
            disabled={progress <= 0}
          >
            ➖ Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
