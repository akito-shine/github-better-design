import React from 'react';

export const LoadingIndicator = () => (
  <div className="flex justify-center mb-4">
    <div className="animate-pulse flex space-x-2">
      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
    </div>
  </div>
);