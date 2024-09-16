import Faq from "@/components/common/Faq";
import TitleBar from "@/components/common/TitleBar";
import AfterBefore from "@/components/devices/AfterBefore";
import DevicesHero from "@/components/devices/DevicesHero";
import SkinConcernsAddressed from "@/components/devices/SkinConcernsAddressed";
import TreatmentOptions from "@/components/devices/TreatmentOptions";
import { DEVICES_VIRTUERF_TREATMENT_LIST, VIRTUE_HERO, VIRTUE_RF_SKIN_LIST } from "@/utils/Helper";

const page = () => {
  return (
    <>
      <TitleBar
        titlePath="/devices"
        title="Devices"
        subTitle="Virtue RF"
        subTitlePath="/Devices/virtue-rf"
      />
      <DevicesHero title="How Virtue RF Works"
        imageSrc="/assets/images/devices/virtue-rf-logo.webp"
        imageClass="w-[220px] h-[46px] md:w-[282px] md:h-[59px]"
        description="The VirtueRF is a groundbreaking microneedling system that integrates Radio Frequency (RF) energy, elevating skin rejuvenation to new heights. Its unique technology allows for precise, controlled delivery of RF energy through microneedles, stimulating collagen production deep within the skin. Designed for comfort and efficiency, VirtueRF targets fine lines, wrinkles, and scars with minimal downtime. Its customizable settings cater to various skin types and concerns, making it a versatile tool for achieving smoother, firmer, and revitalized skin."
        treatment={VIRTUE_HERO} />
      <TreatmentOptions
        treatmentOptionList={DEVICES_VIRTUERF_TREATMENT_LIST}
        title="Treatment Options"
      />
      <SkinConcernsAddressed contentList={VIRTUE_RF_SKIN_LIST} />
      <Faq />
      <AfterBefore />
    </>
  );
};

export default page;
