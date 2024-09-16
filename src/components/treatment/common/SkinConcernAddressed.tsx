"use client";
import Icons from "@/components/skin-concerns/common/Icons";
import { useState } from "react";
import TreatmentCard from "./TreatmentCard";
import GreenHeading from "@/components/common/GreenHeading";
import SubHeading from "@/components/common/SubHeading";
interface IProps {
  contentList: {
    image: string;
    title: string;
  }[];
  title: string;
}
interface Card {
  image: string;
  title: string;
}

const SkinConcernAddressed = (props: IProps) => {
  const { contentList, title } = props;
  const [visibleCards, setVisibleCards] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const TOGGLE_CARD = () => {
    if (expanded) {
      setVisibleCards(4);
    } else {
      setVisibleCards((prev) => Math.min(prev + 4, contentList.length));
    }
    setExpanded(!expanded);
  };
  
  return (
    <div className="bg-white-rock py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <div className="container xl:max-w-[1188px]">
        <GreenHeading
          color="laurel"
          className="justify-center text-laurel mb-2.5"
        >
          {title}
        </GreenHeading>
        <SubHeading className="text-center lg:mb-[50px] mb-8 !leading-130">
          Skin Concerns Addressed
        </SubHeading>
        <div className="flex gap-6 flex-wrap justify-center">
          {contentList
            .slice(0, visibleCards)
            .map((obj: Card, index: number) => (
              <TreatmentCard data={obj} key={index} />
            ))}
        </div>
        <div
          onClick={TOGGLE_CARD}
          className="size-[38px] cursor-pointer border border-laurel common-transition hover:bg-white group rounded-full flex items-center justify-center lg:mt-12 mt-7 bg-laurel mx-auto"
        >
          <span className={`${expanded ? "rotate-180" : ""} common-transition`}>
            <Icons icon="whiteArrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkinConcernAddressed;
