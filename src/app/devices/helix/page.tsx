import Faq from "@/components/common/Faq";
import TitleBar from "@/components/common/TitleBar";
import DevicesHero from "@/components/devices/DevicesHero";
import SkinConcernsAddressed from "@/components/devices/SkinConcernsAddressed";
import AfterBefore from "@/components/devices/AfterBefore";
import { DEVICES_HELIX_TREATMENT_LIST, HELIX_HERO, HELIX_SKIN_LIST } from "@/utils/Helper";
import TreatmentOptions from "@/components/devices/TreatmentOptions";

const page = () => {
  return (
    <>
      <TitleBar
        titlePath="/devices"
        title="Devices"
        subTitle="Helix"
        subTitlePath="/Devices/helix"
      />
      <DevicesHero title="How Helix Works"
        imageSrc="/assets/images/devices/helix-logo.webp"
        imageClass="w-[177px] h-[59px]"
        description="The Helix Skin Rejuvenation Laser is a state-of-the-art skincare treatment designed to address various skin concerns and promote overall skin rejuvenation. Using advanced fractional CO2 laser technology combined with 1570nm non-ablative technology, the Helix targets wrinkles, aging skin, scars, and texture issues with minimal downtime. At our dermatology clinic, we're proud to offer the Helix treatment as part of our comprehensive skincare services, helping our clients achieve smoother, more youthful-looking skin."
        treatment={HELIX_HERO} />
      <TreatmentOptions
        treatmentOptionList={DEVICES_HELIX_TREATMENT_LIST}
        title="Treatment Options"
      />
      <SkinConcernsAddressed contentList={HELIX_SKIN_LIST}/>
      <Faq />
      <AfterBefore />
    </>
  );
};

export default page;
