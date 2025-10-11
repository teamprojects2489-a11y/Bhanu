import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-red-200 border-solid rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-red-500 border-solid rounded-full animate-spin"></div>
        </div>
        <div className="mt-4 text-center">
          <div className="text-red-500 font-semibold text-lg">🎪</div>
          <p className="text-gray-600 text-sm mt-2">
            Loading amazing content...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
