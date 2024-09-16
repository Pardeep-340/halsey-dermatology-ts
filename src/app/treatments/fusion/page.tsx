import TitleBar from "@/components/common/TitleBar";
import DoctorProfile from "@/components/treatment/common/DoctorProfile";
import Hero from "@/components/treatment/common/Hero";
import SkinConcernAddressed from "@/components/treatment/common/SkinConcernAddressed";
import TreatmentQuality from "@/components/treatment/common/TreatmentQuality";
import { FUSION_HELIX, FUSION_SKIN_CONCERNS_ADDRESSED } from "@/utils/Helper";

const page = () => {
  return (
    <div>
      <TitleBar
        title="Home"
        titlePath="/"
        subTitle="Fusion"
        subTitlePath="/fusion"
      />
      <Hero
        logo=""
        alt=""
        title="Enhanced CO2 Rejuvenation"
        subTitle="Helix Fusion"
        description="This powerful CO2 laser combines ablative and non-ablative energies to completely rejuvenate the skin. Targeting both the superficial and deep layers of the skin, we're able to drastically minimize fine lines and wrinkles, smooth skin irregular texture, reduce sun damage, and tighten skin. "
        treatment={FUSION_HELIX}
      />
      <TreatmentQuality />
      <SkinConcernAddressed
        title="Fusion"
        contentList={FUSION_SKIN_CONCERNS_ADDRESSED}
      />
      <DoctorProfile
        subtitle="Asst. Clinical Professor of DermatologyNYU Langone"
        title="Mark Halsey, MD, FAAD"
        image="/assets/images/homepage/webp/mark-halsey-team.webp"
      />
    </div>
  );
};

export default page;
