import React from 'react';
import dynamic from 'next/dynamic';

import CommonHeadings from './CommonHeadings';

const VideoList = dynamic(() => import('./VideoList'));

const VideoSection = ({ title, playlistId }) => {
  return (
    <div className="py-24 bg-gradient-to-r from-bg-slate-200 to-slate-800">
      <div className="pb-10 flex flex-col px-10 gap-10">
        <CommonHeadings title={title} />
        <VideoList playlistId={playlistId} />
      </div>
    </div>
  );
};

export default VideoSection;
