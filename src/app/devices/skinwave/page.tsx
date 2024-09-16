import Faq from "@/components/common/Faq";
import TitleBar from "@/components/common/TitleBar";
import AfterBefore from "@/components/devices/AfterBefore";
import DevicesHero from "@/components/devices/DevicesHero";
import SkinConcernsAddressed from "@/components/devices/SkinConcernsAddressed";
import TreatmentOptions from "@/components/devices/TreatmentOptions";
import { DEVICES_SKINWAVE_TREATMENT_LIST, SKINWASW_HERO, SKINWAVE_SKIN_LIST } from "@/utils/Helper";

const page = () => {
  return (
    <>
      <TitleBar
        titlePath="/devices"
        title="Devices"
        subTitle="Skinwave"
        subTitlePath="/Devices/skinwave"
      />
      <DevicesHero
        title="How Skinwave Works"
        imageSrc="/assets/images/devices/skinwave-logo.webp"
        imageClass="w-[200px] h-[34px] md:w-[260px] md:h-[45px] lg:w-[345px] lg:h-[59px]"
        description="The Skinwave elevates hydration-based facials to new levels. Utilizing a dynamic blend of hydrogen therapy, electroporation, and aqua delivery systems, it deeply cleanses, exfoliates, and nourishes the skin. This innovative device also infuses antioxidant-rich solutions, promoting a radiant, healthier-looking complexion. With its gentle yet effective approach, Skinwave is perfect for all skin types, offering a refreshing and revitalizing experience with no downtime."
        treatment={SKINWASW_HERO}
      />
      <TreatmentOptions
        treatmentOptionList={DEVICES_SKINWAVE_TREATMENT_LIST}
        title="Treatment Options"
      />
      <SkinConcernsAddressed contentList={SKINWAVE_SKIN_LIST} />
      <Faq />
      <AfterBefore />
    </>
  );
};

export default page;
