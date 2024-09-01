
import {Swiper, SwiperSlide} from "swiper/react";
import CarrosselCard from "../carrossel-card";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carrossel() {
  return (
      <Swiper 
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000 }} 
      loop={true}
      >
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Pokemon.png"} imageAlt={"Produto"} />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Nerd.png"} imageAlt={"Produto"} />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Capitao.png"} imageAlt={"Produto"} />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Game.png"} imageAlt={"Produto"} />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Geek.png"} imageAlt={"Produto"} />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Pokemon.png"} imageAlt={"Produto"} />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselCard imageSrc={"/produtos/Game.png"} imageAlt={"Produto"} />
        </SwiperSlide>
      </Swiper>
  )
}
