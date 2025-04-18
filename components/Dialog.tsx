import React from 'react';

import YoutubePlayer from './YoutubePlayer';

export function PlayerDialog({ setOpen, selected }) {
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOpen}>
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-1/3" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">{selected?.title ?? ''}</h2>
        </div>
        <div className="aspect-video">
          <YoutubePlayer videoId={selected?.id} />
        </div>
      </div>
    </div>
  );
}
