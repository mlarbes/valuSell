import React from 'react';
import { Play, Clock, Users } from 'lucide-react';

interface Demo {
  id: string;
  title: string;
  description: string;
  duration: string;
  views: number;
  thumbnail: string;
}

const demos: Demo[] = [
  {
    id: '1',
    title: 'Data Loss Prevention Overview',
    description: 'Complete walkthrough of our DLP solution with focus on data classification',
    duration: '15 min',
    views: 245,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=450'
  },
  {
    id: '2',
    title: 'Advanced Threat Protection',
    description: 'Deep dive into our ATP features and real-world use cases',
    duration: '12 min',
    views: 189,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=450'
  },
  {
    id: '3',
    title: 'Cloud Security Framework',
    description: 'Overview of our cloud security architecture and implementation',
    duration: '18 min',
    views: 312,
    thumbnail: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&q=80&w=800&h=450'
  }
];

export function Demos() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Demo Library</h1>
        <p className="text-gray-600">Browse and manage product demonstrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => (
          <div key={demo.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <img
                src={demo.thumbnail}
                alt={demo.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-12 h-12 text-white" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{demo.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{demo.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {demo.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {demo.views} views
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
