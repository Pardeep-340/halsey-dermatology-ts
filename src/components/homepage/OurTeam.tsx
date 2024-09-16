"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Icons from "./common/Icons";
import { Navigation } from "swiper/modules";
import { TEAM_LIST } from "@/utils/Helper";
import GreenHeading from "../common/GreenHeading";
import SubHeading from "../common/SubHeading";
interface TeamImage {
  image: string;
  title: string;
  post: string;
  alt?: string;
}
const OurTeam = () => {
  return (
    <div className="xl:pt-[100px] md:pt-[70px] pt-12 bg-white">
      <div className="container xl:max-w-[1188px]">
        <GreenHeading color="laurel" className="laurel justify-center">
          Team
        </GreenHeading>
        <SubHeading className="text-center mt-2.5 !leading-130">
          Our Team
        </SubHeading>
        <div className="md:mt-12 mt-8 relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            loop={true}
            centeredSlides={true}
            navigation={{
              prevEl: ".custom-swiper-prev",
              nextEl: ".custom-swiper-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {TEAM_LIST.map((obj: TeamImage, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden common-transition flex justify-center w-fit mx-auto slide_shadow">
                    <Image
                      src={obj.image}
                      alt={obj.title
                        .toLowerCase()
                        .split(" ")
                        .slice(0, 2)
                        .join("-")
                        .replace(",", " ")}
                      width={364}
                      height={371}
                    />
                    <div className="slide_content absolute left-0 -bottom-full group-hover:bottom-0 duration-300 md:max-h-[77px] max-h-18 border-t border-t-solid border-t-white border-opacity-70 bg-black bg-opacity-[2%] backdrop-blur-lg w-full">
                      <p className=" font-semibold lg:text-custom-2xl md:text-2xl sm:text-xl text-lg text-white text-center mt-2 leading-110">
                        {obj.title}
                      </p>
                      <p className=" font-normal md:text-base text-sm text-white text-center mb-2 leading-150">
                        {obj.post}
                      </p>
                      <span className="block w-full lg:h-[7px] h-1 bg-laurel"></span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mt-6 xl:mt-0 flex justify-center gap-3">
            <div className="cursor-pointer custom-swiper-prev xl:absolute z-10 -left-[65px] xl:top-1/2 xl:-translate-y-1/2 w-[35px] h-[35px] rounded-full border border-solid border-holly flex justify-center items-center group hover:bg-laurel hover:border-transparent common-transition">
              <Icons
                className="group-hover:fill-white common-transition"
                icon="leftArrowIcon"
              />
            </div>
            <div className="cursor-pointer custom-swiper-next xl:absolute z-10 -right-[65px] xl:top-1/2 xl:-translate-y-1/2 w-[35px] h-[35px] rounded-full border border-solid border-holly flex justify-center items-center group hover:bg-laurel hover:border-transparent common-transition">
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

export default OurTeam;
