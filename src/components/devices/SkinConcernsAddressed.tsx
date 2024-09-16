import Cta from '@/components/common/Cta';
import DefineCard from '@/components/common/DefineCard';
import GreenHeading from '@/components/common/GreenHeading';
interface SkinAddressedProps {
    contentList: {
      image: string;
      title: string;
    }[];
  }
const SkinConcernsAddressed = ({contentList}:SkinAddressedProps) => {
    return (
        <div className="container xl:max-w-[1188px] py-16 md:py-20 lg:py-24 xl:py-[100px]">
            <GreenHeading color="laurel" className="justify-center laurel mb-2.5">
                Treatments
            </GreenHeading>
            <DefineCard title='Skin Concerns Addressed' pageTitle="/skin-concerns" className="!px-0" listClass="xl:pt-[50px]" contentList={contentList} />
            <div className='flex items-center justify-center gap-3 mt-8 md:mt-[50px]'>
                <Cta>Book Now</Cta>
                <Cta className='!bg-white !text-laurel !border-laurel hover:!shadow-laurel hover:!text-white'>More</Cta>
            </div>
        </div>
    )
}

export default SkinConcernsAddressed