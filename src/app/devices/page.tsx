import DefineCard from "@/components/common/DefineCard";
import Faq from "@/components/common/Faq";
import TitleBar from "@/components/common/TitleBar";
import { ALL_DEVICES_LIST } from "@/utils/Helper";

const page = () => {
  return (
    <>
      <TitleBar
        title="Devices"
        titlePath="/devices"
        subTitle="Devices"
        subTitlePath="/devices"
      />
       <DefineCard title='All Devices' pageTitle="/devices" className="py-16 md:py-20 lg:py-24 xl:py-[100px]" contentList={ALL_DEVICES_LIST} />
      <Faq />
    </>
  );
};

export default page;
