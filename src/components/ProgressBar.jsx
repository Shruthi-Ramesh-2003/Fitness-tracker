import { useEffect, useRef } from 'react';

const ProgressBar = ({ progress }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
    bgGradient.addColorStop(0, '#f3f4f6');
    bgGradient.addColorStop(1, '#e5e7eb');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    const barWidth = (progress / 100) * width;
    const gradient = ctx.createLinearGradient(0, 0, barWidth, 0);
    gradient.addColorStop(0, progress > 50 ? '#10b981' : '#ef4444');
    gradient.addColorStop(1, progress > 50 ? '#34d399' : '#f87171');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(barWidth - 5, 0);
    ctx.quadraticCurveTo(barWidth, 0, barWidth, 5);
    ctx.lineTo(barWidth, height - 5);
    ctx.quadraticCurveTo(barWidth, height, barWidth - 5, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fill();

    ctx.shadowColor = 'transparent';

    ctx.fillStyle = '#1f2937';
    ctx.font = '16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${progress}%`, width / 2, height / 2);
  }, [progress]);

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg mb-6 border-2 border-gradient-to-r from-green-200 to-blue-200">
      <label className="block text-sm font-semibold text-gray-800 mb-3">
        Workout Progress
      </label>
      <canvas
        ref={canvasRef}
        width="300"
        height="40"
        className="w-full rounded-xl border-2 border-gray-300 shadow-sm "
      />
      <span className="block text-center text-sm font-medium text-gray-600 mt-2 bg-gray-100 py-1 rounded-md">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;