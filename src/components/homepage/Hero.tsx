import Cta from "../common/Cta";
import GreenHeading from "../common/GreenHeading";
import Paragraph from "../common/Paragraph";
import Icons from "./common/Icons";

const Hero = () => {
  return (
    <div className="h-screen 2xl:max-h-[1083px] max-h-[850px] bg-hero-bg w-full bg-cover bg-no-repeat bg-center -mt-[65px] md:-mt-20 md:pt-20">
      <div className="container xl:max-w-[1188px] h-full md:py-16">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <GreenHeading color="laurel" className="justify-center laurel">
            Halsey Dermatology
          </GreenHeading>
          <h1 className="!leading-111 font-semibold text-center max-w-[799px] mx-auto text-white uppercase mt-5 md:mt-[30px] mb-2.5 text-3xl md:text-5xl lg:text-custom-6xl">
            YOUR TRUSTED HAMPTONS DERMATOLOGY EXPERTS
          </h1>
          <Paragraph className="text-white mb-8 lg:mb-12">
            Serving the entire Hamptons community since 2018
          </Paragraph>
          <Cta className="bg-laurel text-white !pb-[12.2px] !pt-[12.6px] md:!pb-[15.5px] md:!pt-[15.2px] !text-base md:!text-lg !capitalize">
            Schedule an appointment
          </Cta>
        </div>
      </div>
      <div className="absolute top-0 left-0 lg:block hidden">
        <Icons className="w-full" icon="heroLeaf" />
      </div>
    </div>
  );
};

export default Hero;
