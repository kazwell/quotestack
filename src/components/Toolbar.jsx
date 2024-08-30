import React from 'react';
import { Edit, RefreshCw, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Toolbar = ({ onEditClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-between items-center h-16">
        <button
          onClick={onEditClick}
          className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
        >
          <Edit className="h-6 w-6 mb-1" />
          <span className="text-xs">Edit</span>
        </button>
        <button
          className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
        >
          <RefreshCw className="h-6 w-6 mb-1" />
          <span className="text-xs">Review</span>
        </button>
        <button
          onClick={() => navigate(location.pathname === '/profile' ? '/' : '/profile')}
          className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
        >
          <User className="h-6 w-6 mb-1" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;