"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
    className='h-[350px]'
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='bg-red-500'>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-red-200'>Slide 2</SwiperSlide>
      <SwiperSlide className='bg-red-100'>Slide 3</SwiperSlide>
      <SwiperSlide className='bg-red-300'>Slide 4</SwiperSlide>
    </Swiper>
  );
};
