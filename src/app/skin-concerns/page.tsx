import DefineCard from '@/components/common/DefineCard';
import Faq from '@/components/common/Faq'
import Hero from '@/components/common/Hero'
import { MEDICAL_DERMATOLOGY_LIST, REJUVENATION_ESTHETICS_LIST } from "@/utils/Helper";

const page = () => {
  return (
    <>
      <Hero title="Skin Concerns" />
      <DefineCard pageTitle="/skin-concerns" title='Medical and Pediatric Dermatology' className="py-16 md:py-20 lg:py-24 xl:py-[100px]" contentList={MEDICAL_DERMATOLOGY_LIST} />
      <DefineCard pageTitle="/skin-concerns" title=' Rejuvenation and Esthetics' className="bg-snow-drift py-16 md:py-20" contentList={REJUVENATION_ESTHETICS_LIST} />
      <Faq />
    </>
  );
}

export default page