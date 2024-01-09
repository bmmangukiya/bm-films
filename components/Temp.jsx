"use client";
import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";

import youtube from "../app/youtube";

const VideoList = ({ playlistId = "PLXCoHsJ9oLefdEEDu6BfXyGhzdaqX0FhP" }) => {
  const [videos, setVideos] = useState([]);
  const swiperElRef = useRef(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await youtube.get("/playlistItems", {
          params: {
            playlistId: playlistId,
          },
        });

        console.log(response);

        const fetchedVideos = response.data.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnailUrl: item.snippet.thumbnails.high.url,
        }));

        console.log(fetchedVideos);

        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 3,
      navigation: true,
      centerSlide: true,
      breakpoints: {
        768: {
          // slidesPerView: 4,
        },
      },
    };

    Object.assign(swiperElRef.current, params);

    swiperElRef.current.initialize();
  }, []);

  return (
    <div className="py-5">
      <swiper-container ref={swiperElRef}>
        {videos.map((video) => (
          <swiper-slide key={video.id} className="mx-10">
            <div className="w-[480px] flex flex-col  overflow-hidden cursor-pointer">
              <Image
                width={480}
                height={300}
                className="max-h-[270px] object-cover object-center rounded-md shadow"
                src={video.thumbnailUrl}
                alt={video.title}
              />
              <p className="font-semibold">{video.title}</p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default VideoList;
