"use client";
import { GRATEFUL_PATIENTS, GRATEFUL_PATIENTS_DETAIL } from "@/utils/Helper";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GreenHeading from "../common/GreenHeading";
import SubHeading from "../common/SubHeading";
import Icons from "./common/Icons";
interface SliderImg {
  image: string;
  title: string;
}
interface GratefulText {
  description: string;
}

const GratefulPatients = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="xl:py-[100px] md:py-[70px] py-12 relative overflow-hidden">
      <div className="absolute top-0 -right-10">
        <Icons className="sm:!w-[300px] !w-[200px]" icon="treeRightLeaf" />
      </div>
      <div className="container xl:max-w-[1188px]">
        <GreenHeading
          color="laurel"
          className="justify-center text-center laurel"
        >
          Hundreds of 5 star reviews
        </GreenHeading>
        <SubHeading className="text-center mt-[10px] !leading-130">
          We are grateful for our patients
        </SubHeading>
        <p className="font-medium text-holly md:text-xl text-lg !leading-130 text-center mt-4 uppercase">
          1500+ <span className="text-nandor">five star reviews</span>
        </p>
        <div className="flex gap-[3px] items-center justify-center mt-1">
          <Icons icon="starIcon" />
          <Icons icon="starIcon" />
          <Icons icon="starIcon" />
          <Icons icon="starIcon" />
          <Icons icon="starIcon" />
        </div>
        <div className="xl:mt-[70px] md:mt-16 mt-10 relative max-w-[952px] mx-auto">
          <div className="max-w-[265px] h-[160px] mx-auto flex items-center grateful_patients">
            <Swiper
              spaceBetween={25}
              slidesPerView={3}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              centeredSlides={true}
              navigation={{
                prevEl: ".custom-swiper-prev",
                nextEl: ".custom-swiper-next",
              }}
              modules={[Navigation, Thumbs, Autoplay]}
              className="my_swiper h-[160px]"
            >
              {GRATEFUL_PATIENTS.map((obj: SliderImg, index: number) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="!flex !items-center flex-col justify-center -mt-6"
                  >
                    <div className="relative">
                      <Image
                        className="common-transition"
                        src={obj.image}
                        alt={obj.title
                          .toLowerCase()
                          .split(" ")
                          .slice(0, 2)
                          .join("-")
                          .replace(",", " ")}
                        width={53}
                        height={52}
                        sizes="100vw"
                      />
                      <p className="absolute -bottom-20 left-1/2 -translate-x-1/2 uppercase font-semibold text-2xl text-holly !leading-130 hidden text-nowrap">
                        {obj.title}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="max-w-[830px] mx-auto relative lg:mt-16 mt-8">
            <div className="absolute lg:-top-14 sm:-top-10 -top-9 xl:-left-14 lg:-left-5 md:-left-2">
              <Icons className="lg:w-auto sm:w-10 w-7" icon="uperComma" />
            </div>
            <div className="absolute xl:bottom-0 bottom-0 xl:-right-14 right-0">
              <Icons className="lg:w-auto sm:w-10 w-7" icon="lowerComma" />
            </div>
            <Swiper
              spaceBetween={25}
              slidesPerView={1}
              onSwiper={setThumbsSwiper}
              loop={true}
              allowTouchMove={false}
              modules={[Navigation, Thumbs]}
              className="my_swiper_content"
            >
              {GRATEFUL_PATIENTS_DETAIL.map(
                (obj: GratefulText, index: number) => (
                  <SwiperSlide key={index} className="common-transition">
                    <p className="font-normal  lg:text-custom-xl md:text-xl text-lg text-center text-holly text-opacity-70 !leading-184">
                      {obj.description}
                    </p>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <div className="mt-5 xl:mt-0 flex justify-center gap-3">
            <div className="custom-swiper-prev cursor-pointer xl:absolute z-10 -left-[93px] top-1/2 xl:-translate-y-1/2 w-[35px] h-[35px] rounded-full border border-solid border-holly flex justify-center items-center group hover:bg-laurel hover:border-transparent common-transition">
              <Icons
                className="group-hover:fill-white common-transition"
                icon="leftArrowIcon"
              />
            </div>
            <div className="custom-swiper-next cursor-pointer xl:absolute z-10 -right-[93px] top-1/2 xl:-translate-y-1/2 w-[35px] h-[35px] rounded-full border border-solid border-holly flex justify-center items-center group hover:bg-laurel hover:border-transparent common-transition">
              <Icons
                className="group-hover:fill-white group-hover:stroke-white common-transition"
                icon="rightArrowIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GratefulPatients;
