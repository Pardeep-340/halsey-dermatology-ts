"use client";
import { useState } from "react";
import TreatmentAcneCard from "../common/TreatmentAcneCard";
import Icons from "../common/Icons";
import SubHeading from "@/components/common/SubHeading";
import { usePathname } from "next/navigation";
interface IProps {
  contentList: {
    image: string;
    title: string;
    trending?: string;
  }[];
  title: string;
}
interface Card {
  image: string;
  title: string;
  trending?: string;
}
const TreatmentsAcne = (props: IProps) => {
  const pathname = usePathname();
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
  const { contentList, title } = props;

  return (
    <div className={`${pathname === "/treatments" ? "":"container xl:max-w-[1188px]"}`}>
      <SubHeading className="text-center lg:mb-12 sm:mb-10 mb-8 !leading-130">
        {title}
      </SubHeading>
      <div className="flex lg:gap-x-6 lg:gap-y-12 sm:gap-10 gap-6 justify-center sm:flex-wrap max-sm:flex-col max-sm:items-center">
        {contentList.slice(0, visibleCards).map((obj: Card, index: number) => (
          <TreatmentAcneCard data={obj} key={index} />
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
  );
};

export default TreatmentsAcne;
