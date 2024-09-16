import TitleBar from "@/components/common/TitleBar";
import DoctorProfile from "@/components/treatment/common/DoctorProfile";
import Hero from "@/components/treatment/common/Hero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import TreatmentQuality from "@/components/treatment/common/TreatmentQuality";
import {SIGNATURE_SKINWAVE, SKINWAVE_SKIN_CONCERNS_ADDRESSED } from "@/utils/Helper";

const page = () => {
  return (
    <div>
      <TitleBar
        title="Home"
        titlePath="/"
        subTitle="Signature Skinwave"
        subTitlePath="/signature-skinwave"
      />
      <Hero
        logo=""
        alt=""
        title="Signature Skinwave Facial"
        subTitle="Signature Skinwave"
        description="Exfoliates dead skin cells to unveil smooth, hydrated skin. Clears pore congestion within the pores while infusing the skin with essential nutrients."
        treatment={SIGNATURE_SKINWAVE}
      />
      <TreatmentQuality />
      <SkinConcernAddressed
        title="Signature Skinwave"
        contentList={SKINWAVE_SKIN_CONCERNS_ADDRESSED}
      />
      <DoctorProfile
        subtitle="Licensed Esthetician"
        title="Aimee Drexel, LE"
        image="/assets/images/homepage/webp/aimee-drexel-team.webp"
      />
    </div>
  );
};

export default page;
