import Faq from "@/components/common/Faq";
import TitleBar from "@/components/common/TitleBar";
import Icons from "@/components/treatment/common/Icons";
import OtherHero from "@/components/treatment/common/OtherHero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import Team from "@/components/treatment/medical-visit/Team";
import { MEDICAL_VISIT_SKIN_CONCERNED_LIST } from "@/utils/Helper";
 

const page = () => {
  return (
    <>
      <TitleBar
        title="Treatments"
        titlePath="/treatments"
        subTitle="Medical Visit"
        subTitlePath="/treatments/medical-visit"
      />
      <div className="mx-5 sm:mx-6 relative overflow-hidden">
        <span className="absolute -right-8 -bottom-[395px] pointer-events-none">
          <Icons
            className="lg:w-auto lg:h-auto md:w-[300px] w-[200px]"
            icon="rightLeaf"
          />
        </span>
        <div className="container xl:max-w-[1188px] my-16 md:my-20 lg:my-24 xl:my-[100px] bg-white-rock lg:!px-9 py-10">
          <OtherHero
            title="A Guide to
                  Medical Visits and Check-ups"
            description="Authorization and pre-certification requirements can vary between insurance companies. "
            image="/assets/images/skin-concerns/medical-visit-guide.webp"
          />
        </div>
      </div>
      <SkinConcernAddressed
        title="Medical Visit"
        contentList={MEDICAL_VISIT_SKIN_CONCERNED_LIST}
      />
      <Team />
      <Faq />
    </>
  );
};

export default page;
