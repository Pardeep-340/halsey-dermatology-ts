import SubHeading from "@/components/common/SubHeading";
import TreatmentCards from "./TreatmentCards";
interface IProps {
  treatmentOptionList: {
    title?: string;
    downtime?: string;
    painLevel?: string;
    mostPopular?: boolean;
  }[];
  title: string;
}
interface Card {
  title?: string;
  downtime?: string;
  painLevel?: string;
  mostPopular?: boolean;
}

const TreatmentOptions = (props: IProps) => {
  const { treatmentOptionList, title } = props;

  return (
    <div className="container xl:max-w-[1188px] pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]">
      <SubHeading className="text-center !leading-130 lg:mb-[94px] sm:mb-16 mb-8">
        {title}
      </SubHeading>
      <div className="flex gap-x-5  gap-y-7 sm:flex-wrap max-sm:flex-col justify-center max-sm:items-center">
        {treatmentOptionList.map((obj: Card, index: number) => (
          <TreatmentCards data={obj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;
