import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-effect py-2 relative" style={{ opacity: 0.6 }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <p className="text-green-400 text-sm font-semibold flex items-center gap-2">
            Design with <Heart className="w-4 h-4 text-green-400 animate-heartbeat" /> by Mr. Umair
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;