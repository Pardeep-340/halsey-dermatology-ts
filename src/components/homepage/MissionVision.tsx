import Paragraph from "../common/Paragraph";
import SubHeading from "../common/SubHeading";
import Icons from "./common/Icons";
import Image from "next/image";

const MissionVision = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24 xl:py-[100px] relative">
      <Icons
        icon="treeRightLeaf"
        className="absolute pointer-events-none right-0 -top-36 -z-10 w-[200px] h-[400px] md:w-[273px] md:h-[538px]"
      />
      <div className="container xl:max-w-[1188px]">
        <div className="bg-snow-drift p-5 sm:p-7 md:p-8 lg:p-10 flex items-center flex-col md:flex-row gap-6 lg:gap-10 xl:gap-[60px]">
          <Image
            width={596}
            height={475}
            sizes="100vw"
            className="w-full sm:w-[536px] sm:h-[426px] md:w-[348px] md:h-[277px] lg:w-[500px] lg:h-[398px] xl:w-[596px] xl:h-[475px]"
            src="/assets/images/homepage/webp/mission-vision.webp"
            alt="mission-vision"
          />
          <div className="w-full">
            <SubHeading className="text-center md:text-start !leading-130">
              Mission & Vision
            </SubHeading>
            <Paragraph className="text-center md:text-start mt-2 md:mt-3 lg:mt-4">
              To deliver world-class dermatology and skin care to the Hamptons
              community.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
