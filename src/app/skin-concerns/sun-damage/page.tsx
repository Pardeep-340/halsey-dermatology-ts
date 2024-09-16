import TitleBar from '@/components/common/TitleBar'
import TreatmentsAcne from '@/components/skin-concerns/acne/TreatmentsAcne'
import MedicalHero from '@/components/skin-concerns/common/MedicalHero'
import { SUN_DAMAGE_ACNE_LIST } from '@/utils/Helper'

const page = () => {
  return (
    <>
      <TitleBar
        title="Skin Concerns"
        titlePath="/skin-concerns"
        subTitle="Sun damage"
        subTitlePath="/skin-concerns/sun-damage"
      />
      <MedicalHero
        title="Sun damage"
        description="Sun damage is not only harmful to the skin, but also leads to unwanted pigment and wrinkling of the skin.  Sun damage is important to prevent as it can increase risk of skin cancers and precancerous lesions of the skin.  At Halsey Dermatology, we offer a number of device based treatments to treat and rejuvenate sun-damaged skin. We support patients as they integrate sun protection into their active lifestyles."
        image="/assets/images/skin-concerns/sun-damage.webp"
      />
      <TreatmentsAcne
        contentList={SUN_DAMAGE_ACNE_LIST}
        title="Treatments for Sun Damage"
      />
    </>
  );
}

export default page