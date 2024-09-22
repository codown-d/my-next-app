"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./index.scss";
export default function TzBanner() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [isMounted, setIsMounted] = useState(false);
  let arr = [
    "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/a80755e4-ee2b-43be-8382-48d1e9e52b50.jpg",
    "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/a80755e4-ee2b-43be-8382-48d1e9e52b50.jpg",
    "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/a80755e4-ee2b-43be-8382-48d1e9e52b50.jpg",
  ];
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if(!progressCircle.current||!progressContent.current)return;
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  if (!isMounted) return null;
  return (
    <div className='relative'>
      <Swiper
        className="banner-swiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[Autoplay, Thumbs]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} />
            </SwiperSlide>
          );
        })} 
      </Swiper>
      
      <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
     
      <Swiper
        className="banner-swiper-bg !absolute bottom-0 w-full flex justify-center"
        onSwiper={(val)=>setThumbsSwiper(val)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode]}
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
