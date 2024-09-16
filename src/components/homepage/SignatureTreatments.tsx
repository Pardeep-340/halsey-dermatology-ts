import Image from "next/image";
import Paragraph from "../common/Paragraph";
import { SIGNATURE_TREATMENTS } from "@/utils/Helper";
import GreenHeading from "../common/GreenHeading";
import SubHeading from "../common/SubHeading";
import Cta from "../common/Cta";
interface Signature {
  image: string;
  title: string;
  description: string;
  author: string;
  authorName: string;
}

const SignatureTreatments = () => {
  
  return (
    <div className="md:py-[70px] py-12 bg-white-rock relative overflow-hidden">
      <Image
        className="absolute -right-40 top-0 opacity-30"
        src="/assets/images/homepage/png/footer-leaf.png"
        alt="leaf"
        height={302}
        width={250}
      />
      <div className="container xl:max-w-[1188px]">
        <GreenHeading color="laurel" className="justify-center">
          World class aesthetics
        </GreenHeading>
        <SubHeading className="text-center mt-2.5 !leading-130">
          Our Signature Treatments
        </SubHeading>
        <div className="md:mt-12 mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {SIGNATURE_TREATMENTS.map((obj: Signature, index: number) => {
            return (
              <div
                key={index}
                className={`bg-white sm:max-w-full max-w-[370px] mx-auto hover:shadow-sm common-transition ${
                  index == 2
                    ? "lg:col-span-1 sm:col-span-2 grid justify-center lg:!max-w-full sm:!max-w-[348px]"
                    : ""
                }`}
              >
                <Image
                  className="w-full"
                  src={obj.image}
                  alt={obj.title
                    .toLowerCase()
                    .split(" ")
                    .slice(0, 2)
                    .join("-")
                    .replace(",", " ")}
                  width={364}
                  height={259}
                />
                <div className="mt-[15px] sm:px-[30px] sm:pb-[30px] px-5 pb-5">
                  <p className="font-semibold lg:text-custom-xl md:text-xl text-lg text-holly leading-130">
                    {obj.title}
                  </p>
                  <Paragraph className="md:mt-[15px] mt-2">
                    {obj.description}
                  </Paragraph>
                  <div className="flex items-center gap-[15px] mb-6 mt-[15px]">
                    <Image
                      src={obj.author}
                      alt={obj.author
                        .toLowerCase()
                        .split(" ")
                        .slice(0, 2)
                        .join("-")
                        .replace(",", " ")}
                      width={35}
                      height={35}
                    />
                    <p className="font-semibold md:text-custom-base text-base text-holly leading-150">
                      {obj.authorName}
                    </p>
                  </div>
                  <Cta className="bg-laurel text-white">Book Now</Cta>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SignatureTreatments;
