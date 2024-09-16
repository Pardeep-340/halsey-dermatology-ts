import Faq from "@/components/common/Faq";
import TitleBar from "@/components/common/TitleBar";
import AfterBefore from "@/components/devices/AfterBefore";
import DevicesHero from "@/components/devices/DevicesHero";
import SkinConcernsAddressed from "@/components/devices/SkinConcernsAddressed";
import TreatmentOptions from "@/components/devices/TreatmentOptions";
import { DEVICES_ULTRA_TREATMENT_LIST, ULTRA_HERO, ULTRA_SKIN_LIST } from "@/utils/Helper";

const page = () => {
  return (
    <>
      <TitleBar
        titlePath="/devices"
        title="Devices"
        subTitle="Ultra"
        subTitlePath="/Devices/ultra"
      />
      <DevicesHero title="How Ultra Works"
        imageSrc="/assets/images/devices/ultra-logo.webp"
        imageClass="w-[200px] h-[42px] md:w-[274px] md:h-[59px]"
        description="Lutronic Ultra is a non-ablative laser that offers a gentle yet effective approach to improving skin texture, tone, and overall clarity. Its unique technology makes it suitable for a wide range of skin types and conditions. With minimal downtime and discomfort, Lutronic Ultra is ideal for patients seeking a quick, noticeable improvement in the evenness of their skin tone."
        treatment={ULTRA_HERO} />
      <TreatmentOptions
        treatmentOptionList={DEVICES_ULTRA_TREATMENT_LIST}
        title="Treatment Options"
      />
      <SkinConcernsAddressed contentList={ULTRA_SKIN_LIST} />
      <Faq />
      <AfterBefore />
    </>
  );
};

export default page;
