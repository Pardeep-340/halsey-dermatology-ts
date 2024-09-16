import TitleBar from "@/components/common/TitleBar";
import TreatmentsAcne from "@/components/skin-concerns/acne/TreatmentsAcne";
import MedicalHero from "@/components/skin-concerns/common/MedicalHero";
import { ACNE_LIST } from "@/utils/Helper";
 

const page = () => {
  return (
    <>
      <TitleBar
        title="Skin Concerns"
        titlePath="/skin-concerns"
        subTitle="Acne"
        subTitlePath="/skin-concerns/acne"
      />
      <MedicalHero
        title="Acne"
        description="Acne is one of the most common skin diseases in America. Nonetheless, it can also be one of the most tricky to manage. Bacteria, hormones, and inflammation all play a role. At Halsey dermatology, we are experts in selecting and recommending the best acne treatment options for each patient."
        image="/assets/images/skin-concerns/acne.webp"
      />
      <TreatmentsAcne contentList={ACNE_LIST} title="Treatments for Acne" />
    </>
  );
};

export default page;
