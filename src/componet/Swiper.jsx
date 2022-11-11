import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Swiper =()=>{
  return(
    <>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
<h2>hello</h2>
 
    </>
  )
}
export default Swiper;