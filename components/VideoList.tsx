'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';

import youtube from '@/app/youtube';

import YoutubePlayer from './YoutubePlayer';

const VideoList = ({ playlistId }) => {
  const [videos, setVideos] = useState([]);
  const [openPlayer, setOpenPlayer] = useState(false);
  const [selected, setSelected] = useState(null);
  const glideRef = useRef(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const videos = await youtube.get('/playlistItems', {
          params: {
            playlistId: playlistId
          }
        });

        const fetchedVideos = videos?.data?.items
          .map(({ snippet: { resourceId, title, thumbnails } }) => {
            let selectedImage;
            const imageSizes = ['maxres', 'medium', 'standard', 'high', 'default'];
            for (const size of imageSizes) {
              if (thumbnails[size]) {
                selectedImage = thumbnails[size];
                break;
              }
            }

            if (resourceId?.videoId && title && thumbnails) {
              return {
                id: resourceId.videoId,
                title,
                image: selectedImage
              };
            }
          })
          .filter((item) => item.image);

        setVideos(fetchedVideos.length < 3 ? [...fetchedVideos, ...fetchedVideos, ...fetchedVideos] : fetchedVideos);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  useEffect(() => {
    if (videos.length > 0) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 4,
        gap: 10,
        breakpoints: {
          1024: { perView: 3 },
          768: { perView: 2 },
          480: { perView: 1 }
        }
      });

      glide.mount();

      return () => glide.destroy();
    }
  }, [videos]);

  const handleOpen = (video) => {
    setSelected(video);
    setOpenPlayer(true);
  };

  const handleClose = () => {
    setSelected(null);
    setOpenPlayer(false);
  };

  return (
    <div>
      {videos.length > 0 && (
        <div className="glide" ref={glideRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {videos.map((video, index) => (
                <li key={index} className="glide__slide px-5 flex flex-col space-y-2" onClick={() => handleOpen(video)}>
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={video.image?.url}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      height={video.image?.height}
                      width={video.image?.width}
                      loading="lazy"
                    />
                  </div>
                  <div className="font-medium text-sm">{video.title}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Arrows */}
          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
              </svg>
            </button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {selected && (
        <Dialog open={openPlayer} handler={handleClose} size="lg">
          <DialogHeader>{selected.title}</DialogHeader>
          <DialogBody>
            <YoutubePlayer videoId={selected.id} />
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default VideoList;
