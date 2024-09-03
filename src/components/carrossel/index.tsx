import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselCard from "../carrossel-card";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Post } from "../../../types/home/home";

type CarrosselProps = {
  posts: Post[];
};

export default function Carrossel({ posts }: CarrosselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {posts.map((post, index) => (
        <SwiperSlide key={index}>
          <CarrosselCard key={index} post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
