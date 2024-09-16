import Paragraph from "@/components/common/Paragraph";
import SubHeading from "@/components/common/SubHeading";
import { HOW_IT_WORKS } from "@/utils/Helper";
import Image from "next/image";
import Icons from "../common/Icons";
interface Card {
  count: string;
  image: string;
  title: string;
  description: string;
}

const HowItWorks = () => {
  return (
    <div className="xl:pb-[45px] sm:pb-5 pb-12 relative overflow-hidden">
      <span className="absolute -right-4 -top-4 pointer-events-none">
        <Icons
          className="lg:w-auto lg:h-auto md:w-[300px] w-[200px]"
          icon="rightLeaf"
        />
      </span>
      <div className="container xl:max-w-[1188px]">
        <SubHeading className="text-center !leading-130">
          How it works
        </SubHeading>
        <div className="flex flex-col">
          {HOW_IT_WORKS.map((obj: Card, index) => {
            return (
              <div
                key={index}
                className={`max-w-[716px] w-full flex sm:flex-row flex-col items-center ${
                  index === 1 ? "ms-auto" : ""
                } ${index === 3 ? "ms-auto" : ""}`}
              >
                <p className="lg:!leading-140 md:!leading-120 !leading-110 md:me-[43px] me-6 font-semibold text-black text-opacity-10 sm:text-custom-10xl text-9xl">
                  {obj.count}
                </p>
                <Image
                  className="rounded-2.5 sm:w-[170px] w-[350px]"
                  src={obj.image}
                  alt={obj.title
                    .toLowerCase()
                    .split(" ")
                    .slice(0, 2)
                    .join("-")
                    .replace(",", " ")}
                  height={170}
                  width={170}
                />
                <div className="sm:ms-6 mt-6 sm:mt-0">
                  <p className="mb-4 sm:text-start text-center font-semibold lg:text-2xl md:text-xl text-lg !leading-130">
                    {obj.title}
                  </p>
                  <Paragraph className="sm:text-start text-center">
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
