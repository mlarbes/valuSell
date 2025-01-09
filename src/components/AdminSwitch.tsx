import React from 'react';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminSwitch() {
  return (
    <Link
      to="/admin"
      className="fixed bottom-4 right-4 p-3 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition-colors"
      title="Switch to Admin Console"
    >
      <Settings className="w-6 h-6" />
    </Link>
  );
}
