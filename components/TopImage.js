import React from 'react'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TopImage = ({ src }) => {
  return (
    <div className="text-3xl">
      <Image
        src={src}
        layout="responsive"
        width={1000}
        height={600}
      />
    </div>
  )
}

export default TopImage
