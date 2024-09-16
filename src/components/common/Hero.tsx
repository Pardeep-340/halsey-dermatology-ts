import Icons from "../homepage/common/Icons";
import GreenHeading from "./GreenHeading";
import SubHeading from "./SubHeading";
interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="-mt-[65px] md:-mt-20 bg-hero-skin h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full bg-no-repeat bg-center bg-cover relative">
      <div className="container xl:max-w-[1188px] h-full pt-10 lg:pt-0">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <GreenHeading color="laurel" className="justify-center laurel">
            Halsey Dermatology
          </GreenHeading>
          <SubHeading className="text-center max-w-[799px] !leading-111 mx-auto text-white uppercase mt-4 md:mt-6 lg:mt-[30px] !text-3xl md:!text-5xl lg:!text-custom-6xl">
            {title}
          </SubHeading>
        </div>
      </div>
      <div className="absolute top-0 left-0 lg:block hidden">
        <Icons className="w-full pointer-events-none" icon="heroLeaf" />
      </div>
    </div>
  );
};

export default Hero;
