"use client"
import Cta from "@/components/common/Cta";
import Popup from "@/components/common/Popup";
import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import { useState } from "react";
import PricingPopUp from "./PricingPopUp";
import { usePathname } from "next/navigation";
interface CardProps {
  title: string;
  image: string;
  subtitle: string;
}
const DoctorProfile: React.FC<CardProps> = ({
  subtitle,
  title,
  image,
}) => {
  const [isNavBookNowVisible, setIsNavBookNowVisible] = useState(false);
  const pathname = usePathname();
  
  return (
    <div className="mx-5 sm:mx-6 xl:pt-[100px] md:pt-[70px] pt-12 relative">
      <Image className={`opacity-30 absolute md:-bottom-[170px] -bottom-[140px] -left-5 md:w-[300px] w-48 -z-10 pointer-events-none ${pathname === "/treatments/perfect-pair" || pathname === "/treatments/categories" ? "hidden":"" }`}
        src="/assets/images/treatments/left-image.webp"
        alt="leaf"
        height={239}
        width={425}
      />
      <div className="container xl:max-w-[1140px] bg-snow-drift flex justify-between gap-6 lg:p-[43px] py-10 px-5 rounded-3xl items-center lg:flex-row flex-col">
        <Image
          className="border-[3px] border-solid border-holly rounded-[20px] xl:w-[405px] lg:w-[350px] xl:h-[405px] lg:h-[350px] object-cover"
          src={image}
          alt={title
            .toLowerCase()
            .split(" ")
            .slice(0, 2)
            .join("-")
            .replace(",", " ")}
          height={405}
          width={405}
        />
        <div className="max-w-[570px] w-full">
          <SubHeading className="mb-[15px] lg:text-start text-center !leading-130">
            {title}
          </SubHeading>
          <p className="lg:mx-0 mx-auto font-medium xl:text-2xl md:text-xl text-lg !leading-150 lg:text-start text-center max-w-[480px] text-holly text-opacity-70">
            {subtitle}
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Cta className="lg:!px-[71px] xl:!text-2xl !leading-130 !font-semibold lg:!py-5 text-nowrap">
              Book Now
            </Cta>
            <Cta
              onClick={() => setIsNavBookNowVisible(!isNavBookNowVisible)}
              className="bg-transparent border border-solid !border-holly !text-holly lg:!px-[88px] hover:!shadow-black hover:!text-white xl:!text-2xl !leading-130 !font-semibold lg:!py-5"
            >
              pricing
            </Cta>
          </div>
          <Popup
            isOpen={isNavBookNowVisible}
            onClose={() => setIsNavBookNowVisible(!isNavBookNowVisible)}
            className="max-w-[1046px]"
          >
            <PricingPopUp />
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
