"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import SubHeading from "@/components/common/SubHeading";
import Paragraph from "@/components/common/Paragraph";
import Icons from "./Icons";
interface SliderImage {
  image: string;
  alt: string;
}
interface TreatmentHero {
  title: string;
  subTitle?: string;
  description: string;
  treatment: {
    image: string;
    alt: string;
  }[];
  logo: string;
  alt: string;
}

const Hero = ({ title, subTitle, description, treatment, logo, alt }: TreatmentHero) => {

  return (
    <div className="xl:py-[100px] md:py-[70px] py-12 relative">
      <span className="absolute right-0 -top-32 pointer-events-none">
        <Icons
          className="lg:w-auto lg:h-auto md:w-[300px] w-[200px]"
          icon="rightLeaf"
        />
      </span>
      <div className="container xl:max-w-[1188px] ">
        <div className="flex items-center justify-between gap-6 md:flex-row flex-col">
          <div className="md:max-w-[460px] max-w-[500px] w-full">
            {subTitle ? (
              <SubHeading className="mb-2.5 md:text-start text-center !leading-130">
                {subTitle}
              </SubHeading>
            ) : (
              <Image
                className="lg:w-[274px] md:w-[220px] w-[170px] md:mx-0 mx-auto mb-2.5 cursor-pointer"
                src={logo}
                alt={alt}
                width={274}
                height={59}
              />
            )}
            <p className="text-4xl md:text-5xl lg:text-custom-6xl text-deep-fir font-semibold !leading-111 mb-4 md:text-start text-center">
              {title}
            </p>
            <Paragraph className="md:text-start text-center">
              {description}
            </Paragraph>
          </div>
          <div className="fex md:justify-end justify-center xl:w-[620px] lg:w-[500px] md:w-[320px] w-full treatment">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {treatment &&
                treatment.map((obj: SliderImage, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <Image
                        className="xl:w-[620px] xl:h-[580px] lg:w-[500px] lg:h-[450px] md:w-[320px] md:h-[320px]"
                        src={obj.image}
                        alt={obj.alt
                          .toLowerCase()
                          .split(" ")
                          .slice(0, 2)
                          .join("-")
                          .replace(",", " ")}
                        width={620}
                        height={580}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
