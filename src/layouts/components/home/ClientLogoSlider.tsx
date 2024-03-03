"use client";

import { ClientLogo } from "@/types";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ClientLogoSlider = ({ logo }: { logo: ClientLogo }) => {
  return (
    <div className="mb-12 mt-24 border-t border-border pt-12">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={80}
        centeredSlides={true}
        speed={3000}
        slidesPerView={3}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          425: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 6,
          },
        }}
      >
        {logo.logos.map((item, index: number) => (
          <SwiperSlide key={index}>
            <div>
              <Image height={32} width={109} src={item.logo} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientLogoSlider;
