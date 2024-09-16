"use client";
import ImageCard from "../common/ImageCard";
import SubHeading from "../common/SubHeading";
import Icons from "../treatment/common/Icons";
import { usePathname } from "next/navigation";
interface Card {
  image: string;
  title: string;
}

interface MedicalDermatologyProps {
  contentList: Card[];
  title: string;
  cardClass?: string;
  className?: string;
  listClass?: string;
  pageTitle?: string;
  imageSize?: string;
}

const DefineCard = ({
  contentList,
  title,
  className = "",
  listClass,
  imageSize,
  cardClass = "",
  pageTitle,
}: MedicalDermatologyProps) => {
  const pathname = usePathname();
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <span
        className={`absolute -right-10 top-0 pointer-events-none ${
          pathname === "/devices" ? "" : "hidden"
        }`}
      >
        <Icons
          className="lg:w-[280px] lg:h-[300px] md:w-[300px] w-[200px]"
          icon="rightLeaf"
        />
      </span>
      <div className={`${pathname === "/treatments" ? "" : "container max-w-[1188px]"}`}>
        <SubHeading className="text-center max-w-[738px] mx-auto">
          {title}
        </SubHeading>
        <div
          className={`pt-8 lg:pt-12 flex flex-wrap gap-5 md:gap-6 justify-center ${listClass}`}
        >
          {contentList.map((obj: Card, index: number) => (
            <ImageCard
              cardClass={cardClass}
              imageSize={`${imageSize}`}
              pageTitle={`${pageTitle}`}
              key={index}
              title={obj.title}
              image={obj.image}
              imageWidth={200}
              imageHeight={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefineCard;
