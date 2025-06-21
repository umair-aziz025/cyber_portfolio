import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-lg border-t border-green-500/20 text-white py-3 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          {/* Copyright */}
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Design with <Heart className="w-3 h-3 animate-heartbeat" /> by Umair Aziz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;