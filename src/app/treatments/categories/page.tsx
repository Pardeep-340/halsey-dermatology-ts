import TitleBar from "@/components/common/TitleBar";
import MedicalHero from "@/components/skin-concerns/common/MedicalHero";
import TreatmentOptions from "@/components/treatment/categories/TreatmentOptions";
import DoctorProfile from "@/components/treatment/common/DoctorProfile";
import OtherHero from "@/components/treatment/common/OtherHero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import TreatmentQuality from "@/components/treatment/common/TreatmentQuality";
import { PERFECT_PAIR_SKIN_CONCERN_DATA } from "@/utils/Helper";
 

const page = () => {
  return (
    <>
      <TitleBar
        title="Treatments"
        titlePath="/treatments"
        subTitle="Categories"
        subTitlePath="/treatments/categories"
      />
      <div className="container xl:max-w-[1188px] py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <OtherHero
          title="Clearing Skin from Pores to Surface"
          description="Hydrodermabrasion facials combine suction with infusion to clean, clear, and rejuvenate skin from the pores to the surface."
          image="/assets/images/skin-concerns/clearing-skin.webp"
        />
      </div>
      <TreatmentQuality />
      <SkinConcernAddressed
        title="Perfect Pair"
        contentList={PERFECT_PAIR_SKIN_CONCERN_DATA}
      />
      <TreatmentOptions />
      <DoctorProfile
        subtitle="Diplomate Fellow, Society of Dermatology Physician Assistants"
        title="Ashton Wilson, PA-C"
        image="/assets/images/homepage/webp/ashton-wilson-team.webp"
      />
    </>
  );
};

export default page;
