import CardTitle from "@/components/common/CardTitle";
import Image from "next/image";

interface IProps {
  data: {
    image: string;
    title: string;
  };
}

const TreatmentCard = (props: IProps) => {
  const { data } = props;

  return (
    <div className="flex flex-col items-center group min-w-[180px] max-w-[180px] md:max-w-[226px] md:min-w-[226px] w-full">
      <div className="sm:rounded-5 rounded-md border border-black overflow-hidden w-full">
        <Image
          src={data.image}
          width={226}
          height={226}
          alt={data.title
            .toLowerCase()
            .split(" ")
            .slice(0, 2)
            .join("-")
            .replace(",", " ")}
          className="group-hover:scale-105 object-cover object-center common-transition sm:rounded-5 rounded-md min-w-[180px] min-h-[180px] md:min-w-[226px] md:min-h-[226px] md:max-w-[226px] md:max-h-[272px] w-full"
        />
      </div>
      <CardTitle>
      {data.title}
      </CardTitle>
    </div>
  );
};

export default TreatmentCard;
