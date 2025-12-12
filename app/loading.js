
'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative group">
        <video
          src="/loading.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-32 h-32"
        />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                        bg-gray-800 text-white text-xs rounded px-2 py-1 
                        whitespace-nowrap opacity-0 group-hover:opacity-100 
                        transition-all duration-200 pointer-events-none">
          <a
            href="https://iconscout.com/lottie-animations/loading"
            target="_blank"
            className="underline"
          >
            Loading
          </a>{' '}
          by{' '}
          <a
            href="https://iconscout.com/contributors/pixelvibe"
            target="_blank"
            className="underline"
          >
            Pixel Vibe
          </a>{' '}
          on{' '}
          <a href="https://iconscout.com" target="_blank" className="underline">
            IconScout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loading;
