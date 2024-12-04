import React from 'react';

interface TextDisplayProps {
  text: string;
}

export const TextDisplay = ({ text }: TextDisplayProps) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Interactive AI Demo</h1>
    <div className="bg-gray-50 rounded-lg p-6">
      <p className="text-xl text-gray-700">{text}</p>
    </div>
  </div>
);