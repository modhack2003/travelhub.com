import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-4 bg-white shadow-lg rounded-lg">
        <p className="text-4xl mb-4">🔧</p>
        <h1 className="text-2xl font-semibold mb-2">Currently Under Maintenance</h1>
        <p className="text-gray-600">We’re working hard to improve our site. Please check back later.</p>
      </div>
    </div>
  );
};

export default MaintenancePage;
