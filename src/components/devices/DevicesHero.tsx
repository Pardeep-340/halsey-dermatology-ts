"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import SubHeading from "@/components/common/SubHeading";
import Paragraph from "@/components/common/Paragraph";
import Icons from "../treatment/common/Icons";
interface SliderImage {
    image: string;
    alt: string;
}
interface TreatmentHero {
    title: string;
    description: string;
    imageSrc: string;
    imageClass?: string;
    treatment: {
        image: string;
        alt: string;
    }[];
}

const DevicesHero = ({ title, description, treatment, imageSrc, imageClass }: TreatmentHero) => {
    
    return (
      <div className="pt-16 md:pt-20 lg:pt-24 xl:pt-[100px] relative overflow-hidden">
          <span className="absolute -right-10 top-0 pointer-events-none">
        <Icons
          className="lg:w-[300px] lg:h-[300px] md:w-[300px] w-[200px]"
          icon="rightLeaf"
        />
      </span>
        <div className="container xl:max-w-[1188px]">
          <div className="flex items-center justify-between gap-6 md:flex-row flex-col">
            <div className="fex md:justify-end justify-center xl:w-[620px] lg:w-[500px] md:w-[320px] w-full treatment">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
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
                          width={620}
                          height={580}
                          src={obj.image}
                          alt={obj.alt}
                          className="xl:w-[620px] xl:h-[580px] lg:w-[500px] lg:h-[450px] md:w-[320px] md:h-[320px] border border-black/10 bg-white"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="md:max-w-[463px] max-w-[500px] w-full">
              <Image
                className={`mx-auto md:ms-0 ${imageClass}`}
                src={imageSrc}
                alt={title.toLowerCase().replace(/\s+/g, "-")}
                width={200}
                height={100}
              />
              <SubHeading className="mt-4 lg:mt-5 text-center !leading-130 md:text-start">
                {title}
              </SubHeading>
              <Paragraph className="mt-4 md:text-start text-center">
                {description}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DevicesHero;
