import Cta from "@/components/common/Cta";
interface IProps {
  data: {
    title?: string;
    downtime?: string;
    painLevel?: string;
    mostPopular?: boolean;
  };
}

const TreatmentCards = (props: IProps) => {
  const { data } = props;

  return (
    <div className="w-[270px] relative hover:shadow-md common-transition rounded">
      {data.mostPopular === true && (
        <div className="rounded-t h-11 sm:absolute w-full max-sm:translate-y-1 left-0 right-0 flex items-center justify-center -top-10 bg-laurel">
          <p className="text-sm font-semibold text-white !leading-130">
            Most Popular
          </p>
        </div>
      )}
      <div
        className={`border border-laurel border-opacity-20 rounded sm:pt-[20px] sm:pb-[30px] p-4 h-full ${data.mostPopular === true && "border-[2px] !border-opacity-100"
          }`}
      >
        <p className="sm:text-2xl text-xl mx-auto max-w-[220px] text-center font-semibold !leading-130 lg:h-[161px] sm:h-[140px] h-[110px] text-black">
          {data.title}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-holly !leading-130 ">
            Downtime:
          </p>
          <p className="text-sm font-normal text-black !leading-130 uppercase">
            {data.downtime}
          </p>
        </div>
        <div
          className={`mt-2 mb-8 h-[5px] w-full rounded-full bg-black bg-opacity-10 relative after:absolute after:top-0 after:bottom-0 after:left-0 after:bg-black after:w-0 after:rounded-full ${data.downtime === "none" && "after:!w-0"
            } ${data.downtime === "Minimal" && "after:!w-9"} ${data.downtime === "Moderate" && "after:!w-[95.7px]"
            }`}
        ></div>
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-holly !leading-130 ">
            Pain Level:
          </p>
          <p className="text-sm font-normal text-black !leading-130 uppercase">
            {data.painLevel}
          </p>
        </div>
        <div
          className={`mt-2 mb-8 h-[5px] w-full rounded-full bg-black bg-opacity-10 relative after:absolute after:top-0 after:bottom-0 after:left-0 after:bg-black after:w-0 after:rounded-full ${data.painLevel === "none" && "after:!w-0"
            } ${data.painLevel === "Minimal" && "after:!w-9"}  ${data.painLevel === "Moderate" && "after:!w-[95.7px]"
            }`}
        ></div>
        <div className="text-center lg:mt-[100px] sm:mt-16 mt-12">
          <Cta className="!text-black sm:!text-lg !text-base sm:!py-3.5 !py-3 sm:!px-6 !px-5 uppercase !bg-transparent !border-black hover:!shadow-black hover:!text-white"> Learn More</Cta>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCards;
