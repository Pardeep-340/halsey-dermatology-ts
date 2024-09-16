import TitleBar from "@/components/common/TitleBar";
import DoctorProfile from "@/components/treatment/common/DoctorProfile";
import Hero from "@/components/treatment/common/Hero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import TreatmentQuality from "@/components/treatment/common/TreatmentQuality";
import { PERFECT_PAIR_SKIN_CONCERN_DATA, ULTRA } from "@/utils/Helper";

const page = () => {
  return (
    <div>
      <TitleBar
        title="Home"
        titlePath="/"
        subTitle="Ultra"
        subTitlePath="/ultra"
      />
      <Hero
        title="Pigment Equalizer Boost"
        // subTitle="ULTRA"
        logo="/assets/images/treatments/ultra-logo.webp"
        alt="ultra-logo"
        description="Targets hyperpigmentation and sun damage to even complexion while simultaneously increasing collagen production for the face and décolleté "
        treatment={ULTRA}
      />
      <TreatmentQuality />
      <SkinConcernAddressed
        title="Ultra"
        contentList={PERFECT_PAIR_SKIN_CONCERN_DATA}
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
