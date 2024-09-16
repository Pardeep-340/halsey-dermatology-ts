import DefineCard from "@/components/common/DefineCard";
import Faq from "@/components/common/Faq";
import Hero from "@/components/common/Hero";
import TitleBar from "@/components/common/TitleBar";
import SignatureTreatments from "@/components/homepage/SignatureTreatments";
import TreatmentsAcne from "@/components/skin-concerns/acne/TreatmentsAcne";
import {
  BOTOX_RELAXERS,
  ESTHETICIAN_SERVICES,
  OTHER_TREARMENTS,
  PIGMENTED_TREARMENTS,
  PROCEDURAL_PAIN_CONTRIL,
  REJUVENATION,
  VIRTUERF_COLLAGEN,
  VIRTUERF_STIMULATION,
} from "@/utils/Helper";

const page = () => {
  return (
    <div>
      <Hero title="TREATMENTS" />
      <TitleBar
        title="Home"
        titlePath="/"
        subTitle="Treatments"
        subTitlePath="/treatments"
      />
      <SignatureTreatments />
      <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-[100px] sm:mx-6 mx-5">
        <div className="container xl:max-w-[1140px] py-12 lg:py-[60px] bg-snow-drift">
        <TreatmentsAcne
          contentList={REJUVENATION}
          title="Fractional Laser Rejuvenation"
        />
        </div>
      </div>
      <div className="lg:py-[60px] py-12">
        <DefineCard
          contentList={VIRTUERF_STIMULATION}
          title="VirtueRF and Collagen Stimulation"
          imageSize="md:!w-[226px] md:!h-[226px]"
            cardClass="md:max-w-[226px]"
        />
      </div>
      <div className="mx-5 sm:mx-6">
        <div className="container xl:max-w-[1140px] py-12 lg:py-[60px] bg-snow-drift">
        <TreatmentsAcne
          contentList={PIGMENTED_TREARMENTS}
          title="Pigmented Lesion Treatments"
        />
        </div>
        </div>
        <div className="lg:py-[60px] py-12">
      <DefineCard contentList={VIRTUERF_COLLAGEN} title=" Vascular Laser" imageSize="md:!w-[226px] md:!h-[226px]"   cardClass="md:max-w-[226px]" />
        </div>
        <div className="sm:mx-6 mx-5">
      <div className="bg-snow-drift py-12 lg:py-[60px] container xl:max-w-[1140px]">
        <DefineCard
          contentList={PROCEDURAL_PAIN_CONTRIL}
          title="Procedural Pain Control"
          imageSize="md:!w-[226px] md:!h-[226px]"
            cardClass="md:max-w-[226px]"
        />
      </div>
      </div>
      <div className="py-[60px]">
        <DefineCard
          contentList={BOTOX_RELAXERS}
          title="Botox and Wrinkles Relaxers"
          imageSize="md:!w-[226px] md:!h-[226px]"
            cardClass="md:max-w-[226px]"
        />
      </div>
      <div className="mx-5 sm:mx-6">
      <div className="py-12 lg:py-[60px] bg-snow-drift container xl:max-w-[1140px]">
        <TreatmentsAcne
          contentList={ESTHETICIAN_SERVICES}
          title="Esthetician Services"
        />
      </div>
      </div>
      <div className="pt-12 lg:pt-[60px] lg:pb-24 xl:pb-[160px] pb-16 md:pb-20 ">
        <DefineCard
          contentList={OTHER_TREARMENTS}
          title="Other Services"
          imageSize="md:!w-[226px] md:!h-[226px]"
          cardClass="md:max-w-[226px]"
        />
      </div>
      <Faq />
    </div>
  );
};

export default page;
