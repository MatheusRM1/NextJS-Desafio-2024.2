"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselCard from "../carrossel-card";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Post } from "../../../types/home/home";
import { useEffect, useState } from "react";

type CarrosselProps = {
  posts: Post[];
};

export default function Carrossel({ posts }: CarrosselProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        navigation={!isMobile}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <CarrosselCard key={index} post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
