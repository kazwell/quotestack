import React from 'react';
import { Edit, Rss, RefreshCw, Bell, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Toolbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Edit className="h-6 w-6 mb-1" />, label: 'Edit', path: '/edit' },
    { icon: <Rss className="h-6 w-6 mb-1" />, label: 'Feed', path: '/feed' },
    { icon: <RefreshCw className="h-6 w-6 mb-1" />, label: 'Review', path: '/review' },
    { icon: <Bell className="h-6 w-6 mb-1" />, label: 'Updates', path: '/updates' },
    { icon: <User className="h-6 w-6 mb-1" />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-between items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center w-1/5 h-full ${
              location.pathname === item.path
                ? item.label === 'Review'
                  ? 'text-blue-600 font-bold'
                  : 'text-blue-500'
                : 'text-gray-500'
            } ${
              item.label === 'Review' ? 'scale-110' : ''
            }`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;