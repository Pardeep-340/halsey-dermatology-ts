import TitleBar from "@/components/common/TitleBar";
import DoctorProfile from "@/components/treatment/common/DoctorProfile";
import Hero from "@/components/treatment/common/Hero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import TreatmentQuality from "@/components/treatment/common/TreatmentQuality";
import {SMART_RF, SMART_RF_SKIN_CONCERNS_ADDRESSED } from "@/utils/Helper";

const page = () => {
  return (
    <div>
      <TitleBar
        title="Home"
        titlePath="/"
        subTitle="Smart RF"
        subTitlePath="/smart-rf"
      />
      <Hero
        logo=""
        alt=""
        title="Gold Needle RF"
        subTitle="Smart RF"
        description="Creates controlled microscopic channels in the skin using 36 tiny, gold-plated needles which emit radio frequency heat energy. This energy promotes remodeling of collagen and elastin within the skin. Resulting in tightened skin, less apparent wrinkling, and more even skin irregular texture and tone."
        treatment={SMART_RF}
      />
      <TreatmentQuality />
      <SkinConcernAddressed
        title="Smart RF"
        contentList={SMART_RF_SKIN_CONCERNS_ADDRESSED}
      />
      <DoctorProfile
        subtitle="Diplomate Fellow, Society of Dermatology Physician Assistants"
        title="Ashton Wilson, PA-C"
        image="/assets/images/homepage/webp/ashton-wilson-team.webp"
      />
    </div>
  );
};

export default page;
