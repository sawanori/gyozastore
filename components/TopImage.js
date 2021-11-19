import React from 'react'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TopImage = (props) => {
  console.log(props.src.src1)
  return (
    <section>
      <div className="text-3xl sm:hidden">
        <Image
          src={props.src.src1}
          layout="responsive"
          width={1100}
          height={2500}
        />
      </div>
      <div className="text-3xl invisible sm:visible md:visible lg:visible xl:visible">
        <Image
          src={props.src.src2}
          layout="responsive"
          width={1200}
          height={800}
        />
      </div>
    </section >
  )
}

export default TopImage
