import LearnAboutButton from "./LearnAboutButton";

const TreatmentQuality = () => {
  return (
    <div className="xl:pb-[100px] md:pb-[70px] pb-12">
      <div className="container xl:max-w-[1188px]">
        <div className="flex flex-wrap lg:gap-2 gap-6 justify-between">
          <div className="md:max-w-[300px] w-full">
            <div className="mb-[26px] flex justify-between gap-2">
              <p className=" font-semibold lg:text-2xl md:text-xl text-lg text-holly !leading-130">
                Downtime:
              </p>
              <p className="font-normal lg:text-2xl md:text-xl text-lg text-nandor !leading-130">
                Minimal
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-3 rounded-full bg-black bg-opacity-5"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[14%] h-3 rounded-full bg-laurel z-10"></div>
            </div>
          </div>
          <span className="md:block hidden w-[1px] h-[69px] bg-black bg-opacity-15"></span>
          <div className="md:max-w-[300px] w-full">
            <div className="mb-[26px] flex justify-between gap-2">
              <p className=" font-semibold lg:text-2xl md:text-xl text-lg text-holly !leading-130">
                Pain Level:
              </p>
              <p className=" font-normal lg:text-2xl md:text-xl text-lg text-nandor !leading-130">
                Minimal
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-3 rounded-full bg-black bg-opacity-5"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[14%] h-3 rounded-full bg-laurel z-10"></div>
            </div>
          </div>
          <span className="lg:block hidden w-[1px] h-[69px] bg-black bg-opacity-15"></span>
          <div className="md:max-w-[300px] w-full flex justify-between gap-2">
            <p className=" font-semibold lg:text-2xl md:text-xl text-lg text-holly !leading-130">
            Devices used:
            </p>
            <p className="font-normal lg:text-2xl md:text-xl text-lg text-nandor !leading-130">
              Ultra
            </p>
          </div>
        </div>
        <LearnAboutButton/>
      </div>
    </div>
  );
};

export default TreatmentQuality;
