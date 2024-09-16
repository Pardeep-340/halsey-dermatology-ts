"use client";
import { useState } from "react";
import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Icons from "./common/Icons";
import { MEET_OUR_EXPERTS_LIST } from "@/utils/Helper";
import Popup from "../common/Popup";
import GreenHeading from "../common/GreenHeading";
import SubHeading from "../common/SubHeading";

interface Expert {
  title: string;
  description: string;
  image: string;
  infoList: string[];
  detailsInfoList?: string[];
  upperImage?: string;
  dermatology?: { image: string }[];
}

const MeetOurExperts: React.FC = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const HANDLE_OPEN_POPUP = (expert: Expert) => {
    setSelectedExpert(expert);
    setIsPopupOpen(true);
  };
  const HANDLE_CLOSE_POPUP = () => {
    setIsPopupOpen(false);
    setSelectedExpert(null);
  };

  return (
    <div className="pb-16 md:pb-20 lg:pb-24 xl:pb-[100px] relative">
      <Icons
        icon="treeLeftLeaf"
        className="absolute pointer-events-none left-0 -top-60 -z-10 w-[200px] h-[400px] md:w-[273px] md:h-[538px]"
      />
      <div className="container xl:max-w-[1188px]">
        <GreenHeading color="laurel" className="justify-center laurel">
          Team
        </GreenHeading>
        <SubHeading className="text-center max-w-[799px] mx-auto mt-2.5 !leading-130">
          Meet Our Experts
        </SubHeading>
        <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center gap-6 md:gap-8 xl:gap-10 flex-wrap">
          {MEET_OUR_EXPERTS_LIST.map((obj: Expert, index: number) => (
            <div
              key={index}
              className="border border-black/20 w-full max-w-[400px] sm:w-[284px] md:w-[344px] lg:w-[304px] xl:w-[353px] hover:shadow-sm common-transition"
            >
              <Image
                className="w-full mx-auto lg:w-[302px] lg:h-[240px] xl:w-[364px] xl:h-[279px] object-contain"
                src={obj.image}
                width={364}
                height={289}
                alt={obj.title
                  .toLowerCase()
                  .split(" ")
                  .slice(0, 2)
                  .join("-")
                  .replace(",", " ")}
              />
              <h2 className="text-center text-lg md:text-xl text-holly leading-108.8 pt-6 md:pt-8 pb-2.5 font-semibold uppercase px-4">
                {obj.title}
              </h2>
              <Paragraph className="text-center xl:px-5 h-12 px-4">
                {obj.description}
              </Paragraph>
              <div className="text-center mt-6 mb-[30px]">
                <button
                  className="uppercase inline-block text-base md:text-lg leading-108.8 text-laurel  font-medium hover:text-black common-transition relative after:absolute after:w-full after:h-[1px] after:bg-laurel md:after:bottom-[5px] after:left-0 hover:after:bg-black after:common-transition after:bottom-0"
                  onClick={() => HANDLE_OPEN_POPUP(obj)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedExpert && (
        <Popup isOpen={isPopupOpen} onClose={HANDLE_CLOSE_POPUP}>
          <div className="relative flex flex-col lg:flex-row  lg:gap-8 z-20">
            <div className="sm:min-w-[396px] sm:min-h-[351px] mx-auto relative">
              <Image
                src={selectedExpert.image}
                alt={selectedExpert.title
                  .toLowerCase()
                  .split(" ")
                  .slice(0, 2)
                  .join("-")
                  .replace(",", " ")}
                width={364}
                height={289}
                className="w-full sm:w-[396px] sm:h-[351px] lg:text-start object-cover border border-black/15 "
              />
              {selectedExpert.upperImage && (
                <Image
                  src={selectedExpert.upperImage}
                  alt="top-doctor-logo"
                  width={364}
                  height={289}
                  className="w-14 h-12 sm:w-16 sm:h-14 object-cover absolute top-4 right-4"
                />
              )}
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-center lg:text-start lg:pt-0 pt-4 text-lg md:text-xl text-holly leading-108.8 font-semibold uppercase pb-2.5">
                {selectedExpert.title}
              </h2>
              <Paragraph className="text-center lg:text-start">
                {selectedExpert.description}
              </Paragraph>
              {selectedExpert.infoList.map((info: string, index: number) => (
                <Paragraph
                  className="pt-4 text-center lg:text-start"
                  key={index}
                >
                  {info}
                </Paragraph>
              ))}
            </div>
          </div>
          {selectedExpert.detailsInfoList &&
            selectedExpert.detailsInfoList.map(
              (detail: string, index: number) => (
                <Paragraph
                  key={index}
                  className="pt-4 text-center lg:text-start"
                >
                  {detail}
                </Paragraph>
              )
            )}
          {selectedExpert.dermatology && (
            <div className="pt-6 md:pt-8 md:pb-2.5 flex justify-center lg:justify-between gap-8 flex-wrap">
              {selectedExpert.dermatology.map((derm, i) => (
                <Image
                  key={i}
                  src={derm.image}
                  alt={`dermatology-${i}`}
                  width={167}
                  height={55}
                  className="w-[167px] h-[55px] object-cover"
                />
              ))}
            </div>
          )}
        </Popup>
      )}
    </div>
  );
};

export default MeetOurExperts;
