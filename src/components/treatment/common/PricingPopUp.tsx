import Cta from "@/components/common/Cta";
import Paragraph from "@/components/common/Paragraph";
import SubHeading from "@/components/common/SubHeading";

const PricingPopUp = () => {
  return (
    <div className="py-12 lg:py-[76px]">
      <SubHeading className="uppercase text-center !leading-130">
        Ultra
      </SubHeading>
      <SubHeading className="uppercase text-center py-5 !text-xl md:!text-2xl lg:!text-custom-2xl !leading-130">
        Starting from $20
      </SubHeading>
      <Paragraph className="text-center ">
        Aesthetic services support community initiatives.
      </Paragraph>
      <div className="flex justify-center gap-4">
        <div className="md:mt-10 mt-6 inline-block mx-auto !shadow-xl">
          <Cta className="lg:!px-10 md:!text-xl lg:!text-2xl !leading-130 !font-semibold lg:!py-5 text-nowrap">
            Book Now
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default PricingPopUp;
