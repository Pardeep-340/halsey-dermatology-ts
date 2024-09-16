import TitleBar from "@/components/common/TitleBar";
import DoctorProfile from "@/components/treatment/common/DoctorProfile";
import OtherHero from "@/components/treatment/common/OtherHero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import TreatmentQuality from "@/components/treatment/common/TreatmentQuality";
import HowItWorks from "@/components/treatment/perfect-pair/HowItWorks";
import { PERFECT_PAIR_SKIN_CONCERN_DATA } from "@/utils/Helper";


const page = () => {
  return (
    <>
      <TitleBar
        title="Treatments"
        titlePath="/treatments"
        subTitle="Perfect Pair"
        subTitlePath="/skin-concerns/perfect-pair"
      />
      <div className="container xl:max-w-[1188px] py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <OtherHero
          title="Efficient and Safe Dual Treatment"
          description="The perfect pair treatment combines the best-in-class collagen stimulating results of VirtueRF with the tone-evening Ultra treatment, to address both top layers of skin on the same day, safely, without increasing the downtime."
          image="/assets/images/skin-concerns/safe-treatment.webp"
        />
      </div>
      <TreatmentQuality />
      <HowItWorks />
      <SkinConcernAddressed
        title="Perfect Pair"
        contentList={PERFECT_PAIR_SKIN_CONCERN_DATA}
      />
      <DoctorProfile
        subtitle="Diplomate Fellow, Society of Dermatology Physician Assistants"
        title="Ashton Wilson, PA-C"
        image="/assets/images/homepage/webp/ashton-wilson-team.webp"
      />
    </>
  );
};

export default page;
