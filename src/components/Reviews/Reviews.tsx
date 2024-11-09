"use client";
import { reviews } from "@/data/dummyData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.css";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex justify-between items-start">
        <div className="text-center mb-8">
          <h1 className="sub-heading">reviews</h1>

          <h2 className="heading">What Our Clients Say</h2>
        </div>

        <div className="flex justify-end gap-2 ">
          <button className="swiper-button-prev button text-xl p-2 rounded-full border">
            <IoIosArrowBack />
          </button>
          <button className="swiper-button-next  button text-xl p-2 rounded-full border">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Swiper
        freeMode={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
      >
        <div>
          {reviews?.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewsCard review={review} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
