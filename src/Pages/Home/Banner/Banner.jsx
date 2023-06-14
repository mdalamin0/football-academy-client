
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Banner.css'

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
const Banner = () => {
    return (
        <div className="p-8 md:p-0">
      <Swiper
      
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px]" src="https://media.istockphoto.com/id/1183994081/photo/young-footballers-practicing-running-drills-during-practice.jpg?s=1024x1024&w=is&k=20&c=VYaFRYNRb3ei2UBlEdATc6BomWvh2YaHOW_6bMjz-tE=" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKszlDoGaNv9VOueLDZykjMuCCIqx2_o5gw&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrHTe-PeMRluhKF-Z8s7mDgHbWLJJiQv_7A&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] md:h-[600px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXf76hqOJNBYZa8S39-NcLdHwA9wtuir4Fg&usqp=CAU" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;
