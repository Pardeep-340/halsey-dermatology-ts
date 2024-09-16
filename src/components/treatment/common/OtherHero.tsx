import Paragraph from "@/components/common/Paragraph";
import SubHeading from "@/components/common/SubHeading";
import Image from "next/image";
interface IProps {
  title: string;
  description: string;
  image: string;
}
const OtherHero = (props: IProps) => {
  const { title, description, image } = props;
  return (
    <div className="flex items-center flex-wrap lg:justify-between justify-center gap-y-7">
      <div className="lg:w-5/12 w-full">
        <SubHeading className="lg:max-w-[397px] lg:text-start text-center !leading-130">
          {title}
        </SubHeading>
        <Paragraph className="sm:mt-4 mt-3 !leading-150 lg:max-w-[397px] lg:text-start text-center">
          {description}
        </Paragraph>
      </div>
      <div className="xl:w-7/12 lg:w-6/12 sm:w-9/12 w-full">
        <Image
          src={image}
          alt="safe-treatment"
          width={620}
          height={495}
          className="lg:ml-auto lg:h-[495px] h-[350px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default OtherHero;
