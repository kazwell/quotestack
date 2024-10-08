import React from 'react';
import { Edit, Rss, RefreshCw, Bell, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

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
            className={cn(
              "flex flex-col items-center justify-center w-1/5 h-full relative",
              location.pathname === item.path
                ? "text-blue-500"
                : "text-gray-500"
            )}
          >
            {React.cloneElement(item.icon, {
              className: cn(
                item.icon.props.className,
                location.pathname === item.path ? "text-blue-500" : "text-gray-500"
              ),
            })}
            <span className="text-xs">{item.label}</span>
            {location.pathname === item.path && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;