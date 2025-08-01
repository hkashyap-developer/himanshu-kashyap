// components/HeroSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/slide1.jpg",
      heading: "Bot X",
      sub: "Robots for everything",
    },
    {
      id: 2,
      image: "/slide2.jpg",
      heading: "Bot X",
      sub: "Robots for everything",
    },
    {
      id: 3,
      image: "/slide3.jpg",
      heading: "Bot X",
      sub: "Robots for everything",
    },
  ];

  return (
    <div className="bg-amber-50">
      <div className="w-full h-[80vh] relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000 }}
          loop
          navigation
          className="w-full h-full"
        >
          {slides.map(({ id, image, heading, sub }) => (
            <SwiperSlide key={id}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center text-white text-center px-4"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="bg-black bg-opacity-50 p-6 max-w-xl">
                  <h1 className="text-6xl md:text-5xl font-bold mb-2">
                    {heading}
                  </h1>
                  <p className="text-sm md:text-lg">{sub}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
