'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import youtube from 'app/youtube';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NavigationArrow from './NavigationArrow';
import YoutubePlayer from './YoutubePlayer';

const VideoList = ({ playlistId }) => {
  const [videos, setVideos] = useState([]);
  const [openPlayer, setOpenPlayer] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected !== null && !openPlayer) {
      setOpenPlayer(true);
    }
  }, [openPlayer, selected]);

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

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NavigationArrow type="next" />,
    prevArrow: <NavigationArrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleOpen = () => {
    setSelected(null);
    setOpenPlayer(false);
  };

  return (
    <div>
      {videos?.length > 0 && (
        <Slider {...settings}>
          {videos.map(({ id, title, image: { url, height, width } }, index) => (
            <div key={index} className="px-5 flex flex-col space-y-2" onClick={() => setSelected({ title, id })}>
              <div className="overflow-hidden rounded-md">
                <Image
                  src={url}
                  alt="YouTube Thumbnail"
                  className="w-full h-full object-cover "
                  height={height}
                  width={width}
                  loading="lazy"
                />
              </div>
              <div className="font-medium text-sm ">{title}</div>
            </div>
          ))}
        </Slider>
      )}
      {selected && (
        <Dialog open={openPlayer} handler={handleOpen} size="lg" className="bg-gradient-to-r from-gray-900 via-dark to-black">
          <DialogBody>
            <DialogHeader className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-300 px-0 pt-0">{selected?.title}</DialogHeader>
            <YoutubePlayer videoId={selected.id} />
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default VideoList;
