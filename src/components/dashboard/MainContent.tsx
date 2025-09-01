import React from 'react';

export default function MainContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Dashboard widgets will go here */}
      <div className="lg:col-span-4 h-48 rounded-lg bg-white/5 flex items-center justify-center">
        <p className="text-gray-500">Dashboard Content Area</p>
      </div>
    </div>
  );
}
