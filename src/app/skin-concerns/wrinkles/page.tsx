import TitleBar from "@/components/common/TitleBar";
import TreatmentsAcne from "@/components/skin-concerns/acne/TreatmentsAcne";
import MedicalHero from "@/components/skin-concerns/common/MedicalHero";
import { WRINKLES_ACNE_LIST } from "@/utils/Helper";

const page = () => {
  return (
    <>
      <TitleBar
        titlePath="/skin-concerns"
        title="Skin Concerns"
        subTitle="Wrinkles"
        subTitlePath="/skin-concerns/wrinkles"
      />
      <MedicalHero
        title="Wrinkles"
        description="Wrinkles are lines and creases in the skin commonly seen as part of aging.  Wrinkles can be exacerbated by excessive sun exposure and repetitive facial movements. At Halsey Dermatology, we offer a variety of treatments to address signs of aging including injectables and device based treatments."
        image="/assets/images/skin-concerns/wrinkles.webp"
      />
      <TreatmentsAcne
        contentList={WRINKLES_ACNE_LIST}
        title="Treatments for Wrinkles"
      />
    </>
  );
};

export default page;
