import GreenHeading from "../common/GreenHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Cta from "../common/Cta";

const Addressing = () => {
  
  return (
    <div className="container xl:max-w-[1188px] pt-16 md:pt-20 lg:py-0">
      <div className="flex items-center lg:flex-row flex-col-reverse lg:justify-between gap-6">
        <div className="lg:max-w-[437px] w-full">
          <GreenHeading color="laurel" className="text-laurel sm:mb-2.5 mb-2">
            Expertise
          </GreenHeading>
          <SubHeading className="!leading-130">
            Addressing your skin concerns
          </SubHeading>
          <Paragraph className="sm:mt-4 mt-2 sm:mb-9 mb-5">
            Our team has decades of experience in skin aesthetics and skin
            disease. From Acne to Wrinkles, learn more about how we manage even
            the most challenging skin conditions.
          </Paragraph>
          <Cta className="text-white bg-laurel border border-laurel font-semibold capitalize">
            Learn More
          </Cta>
        </div>
        <div className="max-w-[620px] w-full overflow-hidden">
          <Image
            src="/assets/images/homepage/webp/addressing-baby-skin-concern.webp"
            alt="baby-skin-concern"
            width={620}
            height={413}
            className="w-full hover:scale-105 common-transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Addressing;
