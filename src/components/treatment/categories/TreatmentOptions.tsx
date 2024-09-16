import { TREATMENT_OPTIONS } from "@/utils/Helper";
import TreatmentCard from "../common/TreatmentCard";
import SubHeading from "@/components/common/SubHeading";
interface Card {
  title: string;
  image: string;
}

const TreatmentOptions = () => {

  return (
    <div className="container xl:max-w-[1188px] py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <SubHeading className="md:mb-[50px] mb-8 text-center">
        Treatment Options
      </SubHeading>
      <div className="flex justify-center gap-6 flex-wrap">
        {TREATMENT_OPTIONS.map((obj: Card, index: number) => (
          <TreatmentCard data={obj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;