import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
