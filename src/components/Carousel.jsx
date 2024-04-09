import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

import { Pagination } from "swiper/modules";

import htmlIcon from "../icons/html-5.png";
import cssIcon from "../icons/css.png";
import tailwindIcon from "../icons/tailwindcss_logo_icon_170649.png";
import jsIcon from "../icons/js.png";
import mongoDBIcon from "../icons/mongodb_original_wordmark_logo_icon_146425.png";
import nodeJSIcon from "../icons/nodejs.png";
import gitIcon from "..//icons/git6963.jpg";
import gitHubIcon from "../icons/github.png";
import apiIcon from "../icons/1000_F_480911520_v1VMx4VBEQqEP215aPyB5L59H6VEmag5.jpg";
import reactIcon from "../icons/React-icon.svg.png";
import expressIcon from "../icons/Screenshot_3.png";

function Carousel() {
  return (
    <div className="border-4 border-logo-gold rounded-xl mx-2 bg-white">
      <Swiper
        slidesPerView={3}
        spaceBetween={80}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-8 w-4/5"
      >
        <SwiperSlide>
          <img src={htmlIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={cssIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tailwindIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={jsIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mongoDBIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={expressIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reactIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nodeJSIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gitIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gitHubIcon} alt="" className="w-20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apiIcon} alt="" className="w-20" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
