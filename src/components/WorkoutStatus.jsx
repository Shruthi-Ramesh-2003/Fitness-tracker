import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WorkoutStatus = ({ location, network }) => {
  const targetRef = useRef(null);
  const isInWorkoutZone = useIntersectionObserver(targetRef, { threshold: 0.5 });

  useEffect(() => {
    if (isInWorkoutZone) console.log('In workout zone!');
    else console.log('Out of workout zone!');
  }, [isInWorkoutZone]);

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <p className="text-gray-700">Location: {location || 'Loading...'}</p>
      <p className="text-gray-700">
        Network: {network ? 'Online' : 'Offline'} {network && '(Good for videos)'}
      </p>
      <div
        ref={targetRef}
        className={`mt-2 p-2 rounded ${isInWorkoutZone ? 'bg-green-100' : 'bg-red-100'}`}
      >
        Workout Zone: {isInWorkoutZone ? 'In Range' : 'Out of Range'}
      </div>
    </div>
  );
};

export default WorkoutStatus;