import Paragraph from "@/components/common/Paragraph";
import SubHeading from "@/components/common/SubHeading";
import Icons from "@/components/homepage/common/Icons";
import Image from "next/image";
interface SectionProps {
  title: string;
  description: string;
  image: string;
}

const MedicalHero: React.FC<SectionProps> = ({ title, description, image }) => {
  return (
    <div className="py-16 md:py-20 lg:py-24 xl:pb-[100px] xl:pt-[119px] relative">
      <div className="container xl:max-w-[1188px] flex items-center md:flex-row flex-col xl:gap-[55px] justify-between gap-6">
        <div className="md:max-w-[465px] w-full">
          <SubHeading className="lg:!leading-190 !leading-111 mx-auto text-holly mb-2.5 text-4xl md:text-5xl lg:!text-custom-6xl">
            {title}
          </SubHeading>
          <Paragraph className="lg:text-xl sm:text-lg text-base">
            {description}
          </Paragraph>
        </div>
        <div className="md:max-w-[620px] w-full max-w-[450px] flex md:justify-end justify-center">
          <Image
            className="xl:w-[620px] xl:h-[580px] lg:w-[500px] lg:h-[450px] md:w-[400px] md:h-[400px] object-cover object-top"
            src={image}
            alt={title.toLowerCase().replace(/\s+/g, "-")}
            width={620}
            height={580}
          />
        </div>
      </div>
      <Icons
        icon="treeLeftLeaf"
        className="absolute left-0 xl:top-[332px] lg:top-[200px] top-14 -z-10 w-[200px] h-[400px] md:w-[400px] md:h-[538px]"
      />
    </div>
  );
};

export default MedicalHero;
