import React, { useEffect, useState } from "react";

const LoadingScreen = ({ duration = 2000 }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, duration / 50);

    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-orange-50 z-50 px-4">
      {/* Loading text */}
      <h2 className="text-orange-800 text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-center">
        Loading...
      </h2>

      {/* Progress bar */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-orange-100 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress percentage */}
      <p className="text-orange-700 text-sm sm:text-base mt-3 sm:mt-4">
        {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
