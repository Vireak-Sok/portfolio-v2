'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';

export default function BlogSlider({blogs}) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="works-slider-container">
        <SwiperSlide><BlogCard image={blogs[0].img} alt={blogs[0].alt} name={blogs[0].name} url={blogs[0].url}/></SwiperSlide>
        <SwiperSlide><BlogCard image={blogs[1].img} alt={blogs[1].alt} name={blogs[1].name} url={blogs[1].url}/></SwiperSlide>
        <SwiperSlide><BlogCard image={blogs[2].img} alt={blogs[2].alt} name={blogs[2].name} url={blogs[2].url}/></SwiperSlide>
      </Swiper>
    </>
  );
}