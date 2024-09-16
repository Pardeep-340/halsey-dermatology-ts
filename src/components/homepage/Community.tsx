import Image from "next/image";
import Link from "next/link";
import { COMMUNITY_LOGO_LIST } from "@/utils/Helper";
import SubHeading from "../common/SubHeading";
import Paragraph from "../common/Paragraph";
interface Logo {
  image: string;
  title: string;
  link: string;
}
const Community = () => {
  return (
    <div className="container xl:max-w-[1388px]">
      <SubHeading className="text-center sm:mb-4 mb-2 !leading-130">
        Community
      </SubHeading>
      <Paragraph className="text-center max-w-[676px] mx-auto">
        We share our success with the community that supports us. In 2023 alone,
        Halsey Dermatology provided over $20,000 in sponsorships & direct
        monetary support to:
      </Paragraph>
      <div className="lg:mt-9 sm:mt-7 mt-6 flex sm:gap-8 gap-4 flex-wrap justify-center">
        {COMMUNITY_LOGO_LIST.map((obj: Logo, index: number) => (
          <Link href={obj.link} key={index} className="py-2.5 sm:px-6 px-3">
            <Image
              src={obj.image}
              alt={obj.title
                .toLowerCase()
                .split(" ")
                .slice(0, 2)
                .join("-")
                .replace(",", " ")}
              width={120}
              height={40}
              sizes="100vw"
              className="sm:w-[147px] sm:h-[49px] pointer-events-none"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Community;
