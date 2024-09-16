import Paragraph from "@/components/common/Paragraph";
import SubHeading from "@/components/common/SubHeading";
import { INSURANCE_INFORMATION_LIST } from "@/utils/Helper";

interface InsurancePopUpProps {
    selectedIndex: number;
}

const InsurancePopUp = ({ selectedIndex }: InsurancePopUpProps) => {
    const INSURANCE_INFO = INSURANCE_INFORMATION_LIST[selectedIndex];

    return (
      <div className="py-12 sm:py-14 md:py-20 lg:py-24 xl:py-[120px]">
        <SubHeading className="capitalize text-center pb-1 md:pb-3 lg:pb-4 !leading-130">
          Insurance Information
        </SubHeading>
        {INSURANCE_INFO.description.map((obj: string, index: number) => (
          <Paragraph
            key={index}
            className="text-center max-w-[748px] mx-auto pt-5 lg:pt-6"
          >
            {obj}
          </Paragraph>
        ))}
      </div>
    );
};

export default InsurancePopUp;
