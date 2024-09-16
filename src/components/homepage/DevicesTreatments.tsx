import Image from "next/image";
import Paragraph from "../common/Paragraph";
import { TREATMENT_LIST } from "@/utils/Helper";
import GreenHeading from "../common/GreenHeading";
import SubHeading from "../common/SubHeading";
import Cta from "../common/Cta";
interface Treatment {
  title: string;
  description: string;
  image: string;
  link: string;
}

const DevicesTreatments = () => {
  return (
    <div className="max-lg:bg-snow-drift">
      <div className="container xl:max-w-[1188px] pb-16 md:pb-20 lg:pb-24 xl:pb-[100px]">
        <div className="lg:bg-snow-drift lg:p-10">
          <GreenHeading
            color="laurel"
            className="justify-center text-laurel mb-2.5 text-center"
          >
            Cutting Edge Technology
          </GreenHeading>
          <SubHeading className="text-center max-w-[799px] mx-auto !leading-130">
            Devices and Treatments to meet your needs
          </SubHeading>
          <div className="xl:mt-14 mt-8 xl:pt-1 grid md:grid-cols-2 grid-cols-1 xl:gap-10 gap-6">
            {TREATMENT_LIST.map((obj: Treatment, index: number) => (
              <div
                key={index}
                className="w-full bg-white border-[1.09px] border-black border-opacity-10 group hover:shadow-sm common-transition"
              >
                <div className="w-full overflow-hidden">
                  <Image
                    src={obj.image}
                    alt={obj.title.toLowerCase().split(' ').slice(0, 2).join('-').replace(",", " ")}
                    width={510}
                    height={390}
                    className="w-full group-hover:scale-105 common-transition"
                  />
                </div>
                <div className="xl:p-[30px] p-5">
                  <h3 className="text-custom-xl leading-130 font-semibold text-holly lg:mb-4 mb-2">
                    {obj.title}
                  </h3>
                  <Paragraph className="lg:mb-7 mb-4">
                    {obj.description}
                  </Paragraph>
                  <Cta className="bg-laurel border-laurel text-white md:!py-[15.4px]">
                    {obj.link}
                  </Cta>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesTreatments;
