import Image from "next/image";
interface IProps {
  data: {
    image: string;
    title: string;
    trending?: string;
  };
}

const TreatmentAcneCard = (props: IProps) => {
  const { data } = props;

  return (
    <div
      className={`flex flex-col items-center group sm:gap-4 gap-2 relative max-w-[226px] ${
        data.trending && "max-sm:!pt-7"
      }`}
    >
      <div className="overflow-hidden max-w-[226px] min-w-[226px] w-full border-[4.5px] border-laurel rounded-2.5">
        <Image
          src={data.image}
          alt={data.title.trim().replace(/\s+/g, "-").toLowerCase()}
          width={226}
          height={226}
          className="group-hover:scale-110 common-transition lg:h-[226px] lg:w-[226px] h-[200px] object-cover object-center w-full"
        />
      </div>
      <p className="sm:text-2xl text-lg !leading-130 font-semibold text-center text-holly">
        {data.title}
      </p>
      {data.trending && (
        <div className="absolute left-0 right-0 sm:top-[-27px] top-0 rounded-t-2.5 h-[37px] flex items-center justify-center bg-laurel">
          <p className="text-white text-sm !leading-130">{data.trending}</p>
        </div>
      )}
    </div>
  );
};

export default TreatmentAcneCard;
