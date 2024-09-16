"use client"
import Cta from "@/components/common/Cta";
import GreenHeading from "@/components/common/GreenHeading";
import Popup from "@/components/common/Popup";
import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
import { useState } from "react";
import InsurancePopUp from "./InsurancePopUp";
import { DOCTOR_LIST } from "@/utils/Helper";

interface Doctor {
  title: string;
  image: string;
  description: string;
}

const Team = () => {
  const [isNavBookNowVisible, setIsNavBookNowVisible] = useState(false);
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState<number | null>(null);
  const handleInsuranceClick = (index: number) => {
    setSelectedDoctorIndex(index);
    setIsNavBookNowVisible(true);
  };
  const handleClosePopup = () => {
    setIsNavBookNowVisible(false);
    setSelectedDoctorIndex(null);
  };

  return (
    <div className="px-5 sm:px-6">
      <div className="container xl:max-w-[1140px] xl:!p-[50px] lg:px-8 py-12 bg-snow-drift my-16 md:my-20 lg:my-24 xl:my-[100px] sm:rounded-3xl rounded-xl">
        <GreenHeading color="laurel" className="justify-center mb-2.5">
          Team
        </GreenHeading>
        <SubHeading className="text-center !leading-130">
          Meet Our Experts
        </SubHeading>
        <div className="flex flex-wrap justify-between md:gap-6 gap-10 mt-10">
          {DOCTOR_LIST.map((doctor: Doctor, index: number) => (
            <div
              key={index}
              className="flex flex-col lg:gap-[60px] md:gap-10 gap-8 rounded-3xl items-center lg:max-w-[452px] max-w-[300px] w-full md:mx-0 mx-auto"
            >
              <Image
                className="border-[3px] border-solid border-holly md:rounded-5 rounded-xl xl:w-[405px] lg:w-[350px] xl:h-[405px] lg:h-[350px] w-[300px] h-[300px] object-cover"
                src={doctor.image}
                alt={doctor.title
                  .toLowerCase()
                  .split(" ")
                  .slice(0, 2)
                  .join("-")
                  .replace(",", "")}
                height={405}
                width={405}
              />
              <div className="w-full">
                <SubHeading className="mb-[15px] text-center lg:!text-custom-4xl md:!text-2xl !text-xl !leading-130">
                  {doctor.title}
                </SubHeading>
                <p className="mx-auto font-medium md:text-lg text-base !leading-150 text-center max-w-[325px] text-holly text-opacity-70">
                  {doctor.description}
                </p>
                <div className="md:mt-10 mt-6 flex gap-4 justify-center">
                  <Cta className="lg:!px-[37px] xl:!text-2xl !leading-130 !font-semibold lg:!py-5 text-nowrap">
                    Book Now
                  </Cta>
                  <Cta
                    onClick={() => handleInsuranceClick(index)}
                    className="bg-transparent border border-solid hover:!shadow-black hover:!text-white !border-holly !text-holly lg:!px-[37px] xl:!text-2xl !leading-130 !font-semibold lg:!py-5"
                  >
                    Insurance
                  </Cta>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isNavBookNowVisible && (
          <Popup
            isOpen={isNavBookNowVisible}
            onClose={handleClosePopup}
            className="max-w-[1046px]"
          >
            {selectedDoctorIndex !== null && (
              <InsurancePopUp selectedIndex={selectedDoctorIndex} />
            )}
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Team;
