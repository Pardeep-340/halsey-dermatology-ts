import Cta from "./Cta";
import GreenHeading from "./GreenHeading";
import SubHeading from "./SubHeading";

const Portal = () => {
  return (
    <div className="bg-laurel lg:py-14 py-12">
      <div className="container xl:max-w-[1188px]">
        <GreenHeading color="white" className="justify-center">
          Halsey Dermatology
        </GreenHeading>
        <SubHeading className="text-center !text-white mt-2.5 !leading-130">
          Portal & Messaging
        </SubHeading>
        <div className="flex items-center gap-[18px] flex-wrap justify-center md:mt-10 mt-6">
          <Cta className="!bg-white !text-laurel hover:!shadow-laurel hover:!text-white hover:!border-white sm:!text-lg !leading-111 sm:!py-2.5">
            Message us
          </Cta>
          <Cta className="bg-white bg-opacity-10 text-white !border-white sm:!text-lg sm:!py-2.5">
            Patient portal
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default Portal;
