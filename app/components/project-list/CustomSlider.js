'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CustomCard from './CustomCard';

export default function CustomSlider({projects}) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="works-slider-container">
        <SwiperSlide><CustomCard image={projects[0].img} alt={projects[0].alt} name={projects[0].name} description={projects[0].desc} url={projects[0].url}/></SwiperSlide>
        <SwiperSlide><CustomCard image={projects[1].img} alt={projects[1].alt} name={projects[1].name} description={projects[1].desc} url={projects[1].url}/></SwiperSlide>
        <SwiperSlide><CustomCard image={projects[2].img} alt={projects[2].alt} name={projects[2].name} description={projects[2].desc} url={projects[2].url}/></SwiperSlide>
      </Swiper>
    </>
  );
}